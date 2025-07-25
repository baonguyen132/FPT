// src/modules/categories/dto/create-category.dto.ts
import { IsNotEmpty, IsString, MaxLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Name of the product category',
    example: 'Books',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'Detailed description of the category',
    example: 'A collection of fiction and non-fiction books.',
    required: false,
    maxLength: 255,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;
}