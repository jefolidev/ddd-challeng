import { Entity } from '@/core/entitites/entity'
import { Optional } from '@/types/optional'
import { Product } from '../../../inventory/enterprise/entities/products'
import { Sale } from './sales'

interface SalesHistoryProps {
  sales: Sale[]
  historyGeneratedDate: Date
  profitGeneratedInAPeriod: number
  whichItemWasSoldTheMost?: Product
  whichItemWasSoldInAPeriod?: Product
}

export class SaleHistory extends Entity<SalesHistoryProps> {
  get sales() {
    return this.props.sales
  }

  get historyGeneratedDate() {
    return this.props.historyGeneratedDate
  }

  get profitGeneratedInAPeriod() {
    return this.props.profitGeneratedInAPeriod
  }

  get whichItemWasSoldTheMost() {
    return this.props.whichItemWasSoldTheMost
  }

  get whichItemWasSoldInAPeriod() {
    return this.props.whichItemWasSoldInAPeriod
  }

  static create(props: Optional<SalesHistoryProps, 'historyGeneratedDate'>) {
    const newSaleSearch = new SaleHistory({
      ...props,
      historyGeneratedDate: new Date(),
    })

    return newSaleSearch
  }
}
