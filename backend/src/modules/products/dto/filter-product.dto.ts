// src/modules/products/dto/filter-product.dto.ts
import { IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // <-- Đảm bảo đã import

export class FilterProductDto {
  @ApiProperty({ description: 'Filter products by name (case-insensitive search)', example: 'laptop', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Filter products by category ID (UUID)', example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', required: false, format: 'uuid' })
  @IsOptional()
  @IsUUID()
  categoryId?: string;
}