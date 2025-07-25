// src/modules/products/interfaces/product.interface.ts
export interface IProduct {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  categoryId?: string; // Optional if product can exist without a category
}