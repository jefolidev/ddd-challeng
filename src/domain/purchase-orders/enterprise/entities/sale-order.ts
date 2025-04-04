import { Entity } from "@/core/entitites/entity"
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id"

interface SaleOrderProps {
  saleOrderId: UniqueEntityID
  productId:  UniqueEntityID
  generateDate: Date
  isPending: boolean
  isFinished: boolean
  deliveryTime: string
  finishedDate?: Date
}

export class SaleOrder extends Entity<SaleOrderProps> {
  
  get productId() {
    return this.props.productId
  }

  get generateDate() {
    return this.props.generateDate
  }

  get isPending() {
    return this.props.isPending
  }

  get isFinished() {
    return this.props.isFinished
  }

  get deliveryTime() {
    return this.props.deliveryTime
  }

  get finishedDate() {
    return this.props.finishedDate
  }

  set isPending(isPending: boolean) {
    this.props.isPending = isPending
  }

  set isFinished(isFinished: boolean) {
    this.props.isFinished = isFinished
  }

  set deliveryTime(deliveryTime: string) {
    this.props.deliveryTime = deliveryTime
  }

  static create(props: SaleOrderProps) {
    const newSaleOrder = new SaleOrder({
      ...props,
    })

    return newSaleOrder
  }
}