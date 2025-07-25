// src/modules/categories/categories.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../../database/entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ErrorMessages } from '../../common/constants/error-messages';
import { SuccessMessages } from '../../common/constants/success-messages';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(ErrorMessages.CATEGORY_NOT_FOUND.replace('{id}', id));
    }
    return category;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const existingCategory = await this.categoryRepository.findOne({ where: { name: createCategoryDto.name } });
    if (existingCategory) {
      throw new ConflictException(ErrorMessages.CATEGORY_NAME_EXISTS);
    }
    const newCategory = this.categoryRepository.create(createCategoryDto);
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const category = await this.findOne(id); // Reuses findOne to ensure category exists

    if (updateCategoryDto.name && updateCategoryDto.name !== category.name) {
      const existingCategory = await this.categoryRepository.findOne({ where: { name: updateCategoryDto.name } });
      if (existingCategory && existingCategory.id !== id) {
        throw new ConflictException(ErrorMessages.CATEGORY_NAME_EXISTS);
      }
    }

    Object.assign(category, updateCategoryDto);
    await this.categoryRepository.save(category);
    return category;
  }

  async remove(id: string): Promise<void> {
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(ErrorMessages.CATEGORY_NOT_FOUND.replace('{id}', id));
    }
  }
}