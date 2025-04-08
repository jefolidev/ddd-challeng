import { ProductRepository } from '@/domain/inventory/application/repositories/product-repositroy'
import { Product } from '@/domain/inventory/enterprise/entities/products'

export class InMemoryProductsRepository implements ProductRepository {
  public items: Product[] = []

  async create(productData: Product): Promise<void> {
    this.items.push(productData)
  }
}
