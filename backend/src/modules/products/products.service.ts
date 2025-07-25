// src/modules/products/products.service.ts
import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { ProductRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { ErrorMessages } from '../../common/constants/error-messages';
import { CategoriesService } from '../categories/categories.service';
import { Product } from '../../database/entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    private productRepository: ProductRepository,
    private categoriesService: CategoriesService, // Inject Category Service for category validation
  ) {}

  async findAll(filterDto: FilterProductDto): Promise<Product[]> {
    return this.productRepository.findWithFilters(filterDto);
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id }, relations: ['category'] });
    if (!product) {
      throw new NotFoundException(ErrorMessages.PRODUCT_NOT_FOUND.replace('{id}', id));
    }
    return product;
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const existingProduct = await this.productRepository.findOne({ where: { name: createProductDto.name } });
    if (existingProduct) {
      throw new ConflictException(ErrorMessages.PRODUCT_NAME_EXISTS);
    }

    if (createProductDto.categoryId) {
      await this.categoriesService.findOne(createProductDto.categoryId); // Validate category exists
    }

    const newProduct = this.productRepository.create(createProductDto);
    await this.productRepository.save(newProduct);
    return newProduct;
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id); // Reuses findOne to ensure product exists

    if (updateProductDto.name && updateProductDto.name !== product.name) {
      const existingProduct = await this.productRepository.findOne({ where: { name: updateProductDto.name } });
      if (existingProduct && existingProduct.id !== id) {
        throw new ConflictException(ErrorMessages.PRODUCT_NAME_EXISTS);
      }
    }

    if (updateProductDto.categoryId && updateProductDto.categoryId !== product.categoryId) {
      await this.categoriesService.findOne(updateProductDto.categoryId); // Validate category exists
    }

    Object.assign(product, updateProductDto);
    await this.productRepository.save(product);
    return product;
  }

  async remove(id: string): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(ErrorMessages.PRODUCT_NOT_FOUND.replace('{id}', id));
    }
  }
}