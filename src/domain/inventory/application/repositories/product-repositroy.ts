import type { UniqueEntityID } from '@/core/entitites/unique-entity-id'
import type { Product } from '../../enterprise/entities/products'

export interface ProductRepository {
  create(productData: Product): Promise<void>
  find(productId: string): Promise<Product>
}
