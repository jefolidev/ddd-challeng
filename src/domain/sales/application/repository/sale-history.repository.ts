import type { SaleHistory } from '../../enterprise/entities/sales-history'

export interface SaleHistoryRepository {
  create(saleHistory: Partial<SaleHistory>): Promise<void>
}
