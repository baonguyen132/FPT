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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const swagger_1 = require("@nestjs/swagger");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique identifier of the product', format: 'uuid', example: '1a2b3c4d-5e6f-7890-1234-567890abcdef' }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the product', example: 'Gaming Mouse', maxLength: 100 }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Detailed description of the product', example: 'Ergonomic gaming mouse with customizable RGB lighting.', nullable: true, maxLength: 255 }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Quantity of the product in stock', example: 50, minimum: 0 }),
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Price of the product', example: 49.99, minimum: 0, type: 'number', format: 'float' }),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2, default: 0.00 }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The category this product belongs to', type: () => category_entity_1.Category, required: false }),
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.products, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'categoryId' }),
    __metadata("design:type", category_entity_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'UUID of the category this product belongs to', format: 'uuid', example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "categoryId", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
//# sourceMappingURL=product.entity.js.map