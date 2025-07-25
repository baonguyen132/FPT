import { Category } from './category.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    category: Category;
    categoryId: string;
}
