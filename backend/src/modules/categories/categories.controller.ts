// src/modules/categories/categories.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, BadRequestException, UseGuards } from '@nestjs/common'; // <-- Import UseGuards
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { ErrorMessages } from '../../common/constants/error-messages';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiBearerAuth } from '@nestjs/swagger'; // <-- Import ApiBearerAuth
import { Category } from '../../database/entities/category.entity';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard'; // <-- Import JwtAuthGuard

@ApiTags('categories')
@ApiBearerAuth('access-token') // <-- Sử dụng tên khóa bảo mật đã định nghĩa trong main.ts
@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // ... (các endpoint khác không thay đổi) ...

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new product category' })
  @ApiResponse({ status: 201, description: 'The category has been successfully created.', type: Category })
  @ApiResponse({ status: 409, description: 'Category with this name already exists.' })
  @ApiBody({ type: CreateCategoryDto, description: 'Data for creating a new category' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of all product categories' })
  @ApiResponse({ status: 200, description: 'List of categories.', type: [Category] })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a product category by its ID' })
  @ApiResponse({ status: 200, description: 'Category details.', type: Category })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @ApiResponse({ status: 400, description: 'Invalid ID format.' })
  @ApiParam({ name: 'id', description: 'UUID of the category to retrieve', type: 'string', format: 'uuid' })
  findOne(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, exceptionFactory: () => new BadRequestException(ErrorMessages.INVALID_UUID) })) id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing product category' })
  @ApiResponse({ status: 200, description: 'The category has been successfully updated.', type: Category })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @ApiResponse({ status: 409, description: 'Category with this name already exists.' })
  @ApiParam({ name: 'id', description: 'UUID of the category to update', type: 'string', format: 'uuid' })
  @ApiBody({ type: UpdateCategoryDto, description: 'Data for updating an existing category' })
  update(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, exceptionFactory: () => new BadRequestException(ErrorMessages.INVALID_UUID) })) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a product category by its ID' })
  @ApiResponse({ status: 204, description: 'The category has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @ApiParam({ name: 'id', description: 'UUID of the category to delete', type: 'string', format: 'uuid' })
  remove(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, exceptionFactory: () => new BadRequestException(ErrorMessages.INVALID_UUID) })) id: string) {
    return this.categoriesService.remove(id);
  }
}