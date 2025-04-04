import { UniqueEntityID } from "@/core/entitites/unique-entity-id";
import type { WarnRepository } from "@/repositories/warn-repository";
import { Storage, type StorageProps } from "../entities/storage";
import { Warn } from "../entities/warns";

interface SendWarnWhenReachInProductLimitRequest {
  productId: string
  message: string
}

const storageData: StorageProps[] = [
  {
    productId: new UniqueEntityID("product-1"),
    productQuantity: 19,
    minLimitUntilWarn: 20,
    lastUpdate: new Date(),
    isWarnOpened: true,
    isOpenedOrder: true,
  },
  {
    productId: new UniqueEntityID("product-2"),
    productQuantity: 2,
    minLimitUntilWarn: 5,
    lastUpdate: new Date(),
    isWarnOpened: true,
    isOpenedOrder: true,
  },
]

export class SendWarnWhenReachInProductLimit {
  constructor(
    private warnsRepository: WarnRepository,
  ) { }

  async execute({ message, productId }: SendWarnWhenReachInProductLimitRequest) {
    const warn = Warn.create({
      message,
      productId: new UniqueEntityID(productId)
    })

    const itensOfStorage = Storage.create(storageData).allItems
    const currentItem = itensOfStorage.find(item => item.productId.toString() === productId)

    if (!currentItem) {
      throw new Error("Produto não encontrado!")
    }

    if (currentItem?.productQuantity > currentItem?.minLimitUntilWarn) {
      const { productQuantity, minLimitUntilWarn } = currentItem
      throw new Error(`O item atual não ultrapassa o limite, algo deu errado. Quantidade do item autal: ${productQuantity}; Limite para gerar ordem: ${minLimitUntilWarn}`)
    }

    await this.warnsRepository.create(warn)
    return warn
  }

}