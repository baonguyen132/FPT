// src/modules/products/products.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, HttpStatus, BadRequestException, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { ErrorMessages } from '../../common/constants/error-messages';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { Product } from '../../database/entities/product.entity';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@ApiTags('products')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'The product has been successfully created.', type: Product })
  @ApiResponse({ status: 409, description: 'Product with this name already exists.' })
  @ApiBody({ type: CreateProductDto, description: 'Data for creating a new product' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of all products' })
  @ApiResponse({ status: 200, description: 'List of products.', type: [Product] })
  @ApiQuery({ name: 'name', required: false, description: 'Filter products by name (case-insensitive search)' })
  @ApiQuery({ name: 'categoryId', required: false, description: 'Filter products by category ID (UUID)', type: 'string' }) // <-- Đã xóa "format: 'uuid'"
  findAll(@Query() filterDto: FilterProductDto) {
    return this.productsService.findAll(filterDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a product by its ID' })
  @ApiResponse({ status: 200, description: 'Product details.', type: Product })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @ApiResponse({ status: 400, description: 'Invalid ID format.' })
  @ApiParam({ name: 'id', description: 'UUID of the product to retrieve', type: 'string', format: 'uuid' })
  findOne(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, exceptionFactory: () => new BadRequestException(ErrorMessages.INVALID_UUID) })) id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing product' })
  @ApiResponse({ status: 200, description: 'The product has been successfully updated.', type: Product })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @ApiResponse({ status: 409, description: 'Product with this name already exists.' })
  @ApiParam({ name: 'id', description: 'UUID of the product to update', type: 'string', format: 'uuid' })
  @ApiBody({ type: UpdateProductDto, description: 'Data for updating an existing product' })
  update(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, exceptionFactory: () => new BadRequestException(ErrorMessages.INVALID_UUID) })) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a product by its ID' })
  @ApiResponse({ status: 204, description: 'The product has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @ApiParam({ name: 'id', description: 'UUID of the product to delete', type: 'string', format: 'uuid' })
  remove(@Param('id', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, exceptionFactory: () => new BadRequestException(ErrorMessages.INVALID_UUID) })) id: string) {
    return this.productsService.remove(id);
  }
}