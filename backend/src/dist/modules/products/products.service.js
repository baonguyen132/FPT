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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const error_messages_1 = require("../../common/constants/error-messages");
const categories_service_1 = require("../categories/categories.service");
let ProductsService = class ProductsService {
    constructor(productRepository, categoriesService) {
        this.productRepository = productRepository;
        this.categoriesService = categoriesService;
    }
    async findAll(filterDto) {
        return this.productRepository.findWithFilters(filterDto);
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({ where: { id }, relations: ['category'] });
        if (!product) {
            throw new common_1.NotFoundException(error_messages_1.ErrorMessages.PRODUCT_NOT_FOUND.replace('{id}', id));
        }
        return product;
    }
    async create(createProductDto) {
        const existingProduct = await this.productRepository.findOne({ where: { name: createProductDto.name } });
        if (existingProduct) {
            throw new common_1.ConflictException(error_messages_1.ErrorMessages.PRODUCT_NAME_EXISTS);
        }
        if (createProductDto.categoryId) {
            await this.categoriesService.findOne(createProductDto.categoryId);
        }
        const newProduct = this.productRepository.create(createProductDto);
        await this.productRepository.save(newProduct);
        return newProduct;
    }
    async update(id, updateProductDto) {
        const product = await this.findOne(id);
        if (updateProductDto.name && updateProductDto.name !== product.name) {
            const existingProduct = await this.productRepository.findOne({ where: { name: updateProductDto.name } });
            if (existingProduct && existingProduct.id !== id) {
                throw new common_1.ConflictException(error_messages_1.ErrorMessages.PRODUCT_NAME_EXISTS);
            }
        }
        if (updateProductDto.categoryId && updateProductDto.categoryId !== product.categoryId) {
            await this.categoriesService.findOne(updateProductDto.categoryId);
        }
        Object.assign(product, updateProductDto);
        await this.productRepository.save(product);
        return product;
    }
    async remove(id) {
        const result = await this.productRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(error_messages_1.ErrorMessages.PRODUCT_NOT_FOUND.replace('{id}', id));
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository,
        categories_service_1.CategoriesService])
], ProductsService);
//# sourceMappingURL=products.service.js.map