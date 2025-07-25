export interface IProduct {
    id: string;
    name: string;
    description?: string;
    quantity: number;
    price: number;
    categoryId?: string;
}
