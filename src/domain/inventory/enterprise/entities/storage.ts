import { Entity } from "@/core/entitites/entity"
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id"

export interface StorageProps {
  productId: UniqueEntityID
  productQuantity: number
  minLimitUntilWarn: number
  lastUpdate: Date
  isWarnOpened: boolean
  isOpenedOrder: boolean
}

export class Storage extends Entity<StorageProps[]> {
  // private items: StorageProps[] = []

  get allItems() {
    return this.props
  }

  set productId(productId: UniqueEntityID) {
    const item = this.props.find(item => item.productId === this.productId)

    if (item)
      item.productId = productId

  }

  set productQuantity(productQuantity: number) {
    const item = this.props.find(item => item.productQuantity === this.productQuantity)

    if (item)
      item.productQuantity = productQuantity
  }

  set minLimitUntilWarn(minLimitUntilWarn: number) {
    const item = this.props.find(item => item.minLimitUntilWarn === this.minLimitUntilWarn)

    if (item)
      item.minLimitUntilWarn = minLimitUntilWarn

  }

  set lastUpdate(lastUpdate: Date) {
    const item = this.props.find(item => item.lastUpdate === this.lastUpdate)

    if (item)
      item.lastUpdate = lastUpdate

  }

  set isWarnOpened(isWarnOpened: boolean) {
    const item = this.props.find(item => item.isWarnOpened === this.isWarnOpened)

    if (item)
      item.isWarnOpened = isWarnOpened

  }

  set isOpenedOrder(isOpenedOrder: boolean) {
    const item = this.props.find(item => item.isOpenedOrder === this.isOpenedOrder)

    if (item)
      item.isOpenedOrder = isOpenedOrder

  }

  static create(props: StorageProps[]) {
    const newStorageSearch = new Storage(props)

    return newStorageSearch
  }
}