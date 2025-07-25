// src/database/entities/category.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product.entity';
import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty

@Entity()
export class Category {
  @ApiProperty({ description: 'Unique identifier of the category', format: 'uuid', example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Name of the product category', example: 'Electronics', maxLength: 100 })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ description: 'Detailed description of the category', example: 'Various electronic devices and accessories.', nullable: true, maxLength: 255 })
  @Column({ nullable: true })
  description: string;

  // Products are included for Swagger to understand the relationship, but won't be displayed directly in responses unless explicitly joined.
  // @ApiProperty({ description: 'List of products belonging to this category', type: () => [Product], required: false })
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}