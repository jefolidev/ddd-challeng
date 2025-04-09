import type { SaleHistory } from '../../enterprise/entities/sales-history'

export interface SaleHistoryRepository {
  create(saleHistory: SaleHistory): Promise<void>
}
