import { Entity } from '@/core/entitites/entity'
import type { Optional } from '@/types/optional'

export interface ItemSale {
  productId: string
  quantity: number
  unitPrice: number
}

export type PaymentMethodProps = 'credit' | 'debit' | 'pix'

interface SalesProps {
  saleDate: Date
  saledItems: ItemSale[]
  totalValue: number
  paymentMethod: PaymentMethodProps
}

export class Sale extends Entity<SalesProps> {
  get saleDate() {
    return this.props.saleDate
  }

  get saledItems() {
    return this.props.saledItems
  }

  get totalValue() {
    return this.props.totalValue
  }

  get paymentMethod() {
    return this.props.paymentMethod
  }

  set saledItems(saledItems: ItemSale[]) {
    this.props.saledItems = saledItems
  }

  set paymentMethod(paymentMethod: PaymentMethodProps) {
    this.props.paymentMethod = paymentMethod
  }

  static create(props: Optional<SalesProps, 'totalValue'>) {
    const totalValue = props.saledItems.reduce((items, total) => {
      return total.unitPrice + items
    }, 0)
    const newSale = new Sale({
      ...props,
      totalValue,
    })

    return newSale
  }
}
