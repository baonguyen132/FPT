// src/modules/products/products.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from '../../database/entities/product.entity';
import { ProductRepository } from './products.repository';
import { CategoriesModule } from '../categories/categories.module'; // Import CategoriesModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    CategoriesModule, // Import CategoriesModule to use CategoriesService
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository], // Provide custom repository
})
export class ProductsModule {}