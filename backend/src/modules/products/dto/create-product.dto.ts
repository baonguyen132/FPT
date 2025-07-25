// src/modules/products/dto/create-product.dto.ts
import { IsNotEmpty, IsString, MaxLength, IsOptional, IsInt, Min, IsNumber, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger'; // <-- Đảm bảo đã import

export class CreateProductDto {
  @ApiProperty({ description: 'Name of the product', example: 'Laptop Pro', maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty({ description: 'Detailed description of the product', example: 'High-performance laptop with 16GB RAM and 512GB SSD.', required: false, maxLength: 255 })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @ApiProperty({ description: 'Quantity of the product available in stock', example: 50, minimum: 0 })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  quantity: number;

  @ApiProperty({ description: 'Price of the product', example: 1299.99, minimum: 0, type: 'number', format: 'float' })
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Type(() => Number)
  price: number;

  @ApiProperty({ description: 'ID of the product category (UUID format)', example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', required: false, format: 'uuid' })
  @IsOptional()
  @IsUUID()
  categoryId?: string;
}