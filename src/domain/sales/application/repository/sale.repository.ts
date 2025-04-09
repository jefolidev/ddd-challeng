import type { Sale } from '../../enterprise/entities/sales'

export interface SaleRepository {
  create(sale: Sale): Promise<void>
}
