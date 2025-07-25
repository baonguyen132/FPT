import { Repository, DataSource } from 'typeorm';
import { Product } from '../../database/entities/product.entity';
import { FilterProductDto } from './dto/filter-product.dto';
export declare class ProductRepository extends Repository<Product> {
    private dataSource;
    constructor(dataSource: DataSource);
    findWithFilters(filterDto: FilterProductDto): Promise<Product[]>;
}
