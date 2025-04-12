import type { SaleRepository } from '@/domain/sales/application/repository/sale.repository'
import type { Sale } from '@/domain/sales/enterprise/entities/sales'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

export class InMemorySaleRepository implements SaleRepository {
  public items: Sale[] = []

  async create(sale: Sale) {
    this.items.push(sale)
  }

  async findById(id: string): Promise<Sale> {
    const item = this.items.find((item) => item.id.toString() === id)

    if (!item) {
      throw new Error('Item not founded')
    }

    return item
  }

  async findBetwenDates(initialDate: Date, lastDate: Date): Promise<Sale[]> {
    const initialDayjs = dayjs(initialDate)
    const lastDayjs = dayjs(lastDate)

    const item = this.items.filter((item) => {
      const itemDayjs = dayjs(item.saleDate)

      return itemDayjs.isAfter(initialDayjs) && itemDayjs.isBefore(lastDayjs)
    })

    return item
  }

  async findAll(): Promise<Sale[]> {
    return this.items
  }
}
