import type { Sale } from '../../enterprise/entities/sales'

export interface SaleRepository {
  create(sale: Sale): Promise<void>
  findAll(): Promise<Sale[]>
  findById(id: string): Promise<Sale>
  findBetwenDates(initialDate: Date, lastDate: Date): Promise<Sale[]>
}
