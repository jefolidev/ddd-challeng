import type { SaleRepository } from '@/domain/sales/application/repository/sale.repository'
import type { Sale } from '@/domain/sales/enterprise/entities/sales'

export class InMemorySaleRepository implements SaleRepository {
  public items: Sale[] = []

  async create(sale: Sale) {
    this.items.push(sale)
  }
}
