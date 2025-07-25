// src/database/entities/product.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';
import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty

@Entity()
export class Product {
  @ApiProperty({ description: 'Unique identifier of the product', format: 'uuid', example: '1a2b3c4d-5e6f-7890-1234-567890abcdef' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Name of the product', example: 'Gaming Mouse', maxLength: 100 })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ description: 'Detailed description of the product', example: 'Ergonomic gaming mouse with customizable RGB lighting.', nullable: true, maxLength: 255 })
  @Column({ nullable: true })
  description: string;

  @ApiProperty({ description: 'Quantity of the product in stock', example: 50, minimum: 0 })
  @Column('int', { default: 0 })
  quantity: number;

  @ApiProperty({ description: 'Price of the product', example: 49.99, minimum: 0, type: 'number', format: 'float' })
  @Column('decimal', { precision: 10, scale: 2, default: 0.00 })
  price: number;

  @ApiProperty({ description: 'The category this product belongs to', type: () => Category, required: false })
  @ManyToOne(() => Category, (category) => category.products, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ApiProperty({ description: 'UUID of the category this product belongs to', format: 'uuid', example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', nullable: true })
  @Column({ nullable: true })
  categoryId: string; // Foreign key column
}