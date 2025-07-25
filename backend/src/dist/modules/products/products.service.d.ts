import { ProductRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { CategoriesService } from '../categories/categories.service';
import { Product } from '../../database/entities/product.entity';
export declare class ProductsService {
    private productRepository;
    private categoriesService;
    constructor(productRepository: ProductRepository, categoriesService: CategoriesService);
    findAll(filterDto: FilterProductDto): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<void>;
}
