// src/modules/products/products.repository.ts
import { Repository, DataSource } from 'typeorm';
import { Product } from '../../database/entities/product.entity';
import { Injectable } from '@nestjs/common';
import { FilterProductDto } from './dto/filter-product.dto';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }

  async findWithFilters(filterDto: FilterProductDto): Promise<Product[]> {
    const queryBuilder = this.createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category'); // Eager load category

    if (filterDto.name) {
      queryBuilder.andWhere('LOWER(product.name) LIKE LOWER(:name)', { name: `%${filterDto.name}%` });
    }

    if (filterDto.categoryId) {
      queryBuilder.andWhere('product.categoryId = :categoryId', { categoryId: filterDto.categoryId });
    }

    return queryBuilder.getMany();
  }
}