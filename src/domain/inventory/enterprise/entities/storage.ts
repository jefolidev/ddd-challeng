import { Entity } from '@/core/entitites/entity'
import type { UniqueEntityID } from '@/core/entitites/unique-entity-id'

export interface StorageProps {
  productId: UniqueEntityID
  productQuantity: number
  minLimitUntilWarn: number
  lastUpdate?: Date
  isWarnOpened: boolean
  isOpenedOrder: boolean
}

export class Storage extends Entity<StorageProps> {
  // private items: StorageProps[] = []

  get allItems() {
    return this.props
  }

  get minLimitUntilWarn() {
    return this.props.minLimitUntilWarn
  }

  get productId() {
    return this.props.productId
  }

  set productId(productId: UniqueEntityID) {
    this.productId = productId
  }

  set productQuantity(productQuantity: number) {
    this.productQuantity = productQuantity
  }

  set minLimitUntilWarn(minLimitUntilWarn: number) {
    this.minLimitUntilWarn = minLimitUntilWarn
  }

  set lastUpdate(lastUpdate: Date) {
    this.lastUpdate = lastUpdate
  }

  set isWarnOpened(isWarnOpened: boolean) {
    this.isWarnOpened = isWarnOpened
  }

  set isOpenedOrder(isOpenedOrder: boolean) {
    this.isOpenedOrder = isOpenedOrder
  }

  static create(props: StorageProps) {
    const newStorage = new Storage({
      ...props,
    })
    return newStorage
  }
}
