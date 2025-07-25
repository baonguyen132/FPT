// src/modules/categories/dto/update-category.dto.ts
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty

export class UpdateCategoryDto {
  @ApiProperty({
    description: 'New name for the product category',
    example: 'Magazines',
    maxLength: 100,
    required: false,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @ApiProperty({
    description: 'New description for the category',
    example: 'Periodicals and printed journals.',
    required: false,
    maxLength: 255,
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;
}