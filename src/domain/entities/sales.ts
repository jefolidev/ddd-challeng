import { Entity } from "@/core/entitites/entity"
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id"

interface ItemSale {
  productId: string
  quantity: number
  unitPrice: number
}

type PaymentMethodProps = "credit" | "debit" | "pix"

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

  create(props: SalesProps, id: UniqueEntityID) {
    const newSale = new Sale({
      ...props
    }, id)

    return newSale
  }
}