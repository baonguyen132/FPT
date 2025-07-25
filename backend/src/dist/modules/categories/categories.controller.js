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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
const common_2 = require("@nestjs/common");
const error_messages_1 = require("../../common/constants/error-messages");
const swagger_1 = require("@nestjs/swagger");
const category_entity_1 = require("../../database/entities/category.entity");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    create(createCategoryDto) {
        return this.categoriesService.create(createCategoryDto);
    }
    findAll() {
        return this.categoriesService.findAll();
    }
    findOne(id) {
        return this.categoriesService.findOne(id);
    }
    update(id, updateCategoryDto) {
        return this.categoriesService.update(id, updateCategoryDto);
    }
    remove(id) {
        return this.categoriesService.remove(id);
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product category' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The category has been successfully created.', type: category_entity_1.Category }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Category with this name already exists.' }),
    (0, swagger_1.ApiBody)({ type: create_category_dto_1.CreateCategoryDto, description: 'Data for creating a new category' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a list of all product categories' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of categories.', type: [category_entity_1.Category] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a product category by its ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Category details.', type: category_entity_1.Category }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid ID format.' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID of the category to retrieve', type: 'string', format: 'uuid' }),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.BAD_REQUEST, exceptionFactory: () => new common_1.BadRequestException(error_messages_1.ErrorMessages.INVALID_UUID) }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing product category' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The category has been successfully updated.', type: category_entity_1.Category }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Category with this name already exists.' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID of the category to update', type: 'string', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: update_category_dto_1.UpdateCategoryDto, description: 'Data for updating an existing category' }),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.BAD_REQUEST, exceptionFactory: () => new common_1.BadRequestException(error_messages_1.ErrorMessages.INVALID_UUID) }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a product category by its ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'The category has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found.' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'UUID of the category to delete', type: 'string', format: 'uuid' }),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe({ errorHttpStatusCode: common_1.HttpStatus.BAD_REQUEST, exceptionFactory: () => new common_1.BadRequestException(error_messages_1.ErrorMessages.INVALID_UUID) }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "remove", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, swagger_1.ApiTags)('categories'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
//# sourceMappingURL=categories.controller.js.map