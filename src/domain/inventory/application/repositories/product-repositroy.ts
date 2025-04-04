import type { Product } from "../../enterprise/entities/products";

export interface ProductRepository {
  create(productData: Product): Promise<void> 
}
