"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const filter_product_dto_1 = require("./dto/filter-product.dto");
const common_2 = require("@nestjs/common");
const error_messages_1 = require("../../common/constants/error-messages");
const swagger_1 = require("@nestjs/swagger");
const product_entity_1 = require("../../database/entities/product.entity");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(createProductDto) {
        return this.productsService.create(createProductDto);
    }
    findAll(filterDto) {
        return this.productsService.findAll(filterDto);
    }
    findOne(id) {
        return this.productsService.findOne(id);
    }
    update(id, updateProductDto) {
        return this.productsService.update(id, updateProductDto);
    }
    remove(id) {
        return this.productsService.remove(id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The product has been successfully created.', type: product_entity_1.Product }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Product with this name already exists.' }),
    (0, swagger_1.ApiBody)({ type: create_product_dto_1.CreateProductDto, description: 'Data for creating a new product' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a list of all products' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of products.', type: [product_entity_1.Product] }),
    (0, swagger_1.ApiQuery)({ name: 'name', required: false, description: 'Filter products by name (case-insensitive search)' }),
    (0, swagger_1.ApiQuery)({ name: 'categoryId', required: false, description: 'Filter products by category ID (UUID)', type: 'string' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_product_dto_1.FilterProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a product by its ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Product details.', type: product_entity_1.Product }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid ID format.' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID of the product to retrieve', type: 'string', format: 'uuid' }),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.BAD_REQUEST, exceptionFactory: () => new common_1.BadRequestException(error_messages_1.ErrorMessages.INVALID_UUID) }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing product' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The product has been successfully updated.', type: product_entity_1.Product }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found.' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Product with this name already exists.' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID of the product to update', type: 'string', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: update_product_dto_1.UpdateProductDto, description: 'Data for updating an existing product' }),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.BAD_REQUEST, exceptionFactory: () => new common_1.BadRequestException(error_messages_1.ErrorMessages.INVALID_UUID) }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a product by its ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'The product has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found.' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID of the product to delete', type: 'string', format: 'uuid' }),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.BAD_REQUEST, exceptionFactory: () => new common_1.BadRequestException(error_messages_1.ErrorMessages.INVALID_UUID) }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('products'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map