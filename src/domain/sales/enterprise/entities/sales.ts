import { Entity } from '@/core/entitites/entity'

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

  static create(props: SalesProps) {
    const newSale = new Sale({
      ...props,
    })

    return newSale
  }
}
