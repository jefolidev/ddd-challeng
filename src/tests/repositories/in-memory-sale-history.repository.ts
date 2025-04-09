import type { SaleHistoryRepository } from '@/domain/sales/application/repository/sale-history.repository'
import type { SaleHistory } from '@/domain/sales/enterprise/entities/sales-history'

export class InMemorySaleHistoryRepository implements SaleHistoryRepository {
  public items: SaleHistory[] = []

  async create(saleHistory: SaleHistory) {
    this.items.push(saleHistory)
  }
}
