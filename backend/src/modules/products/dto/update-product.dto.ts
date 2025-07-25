// src/modules/products/dto/update-product.dto.ts
import { IsOptional, IsString, MaxLength, IsInt, Min, IsNumber, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger'; // <-- Đảm bảo đã import

export class UpdateProductDto {
  @ApiProperty({ description: 'New name for the product', example: 'Laptop Pro 2024', maxLength: 100, required: false })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @ApiProperty({ description: 'Updated detailed description of the product', example: 'Improved model with better battery life.', required: false, maxLength: 255 })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @ApiProperty({ description: 'New quantity of the product available in stock', example: 75, minimum: 0, required: false })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  quantity?: number;

  @ApiProperty({ description: 'New price of the product', example: 1399.99, minimum: 0, type: 'number', format: 'float', required: false })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Type(() => Number)
  price?: number;

  @ApiProperty({ description: 'New ID of the product category (UUID format)', example: 'fedcba98-7654-3210-fedc-ba9876543210', required: false, format: 'uuid' })
  @IsOptional()
  @IsUUID()
  categoryId?: string;
}