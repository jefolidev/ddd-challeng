import { UniqueEntityID } from "@/core/entitites/unique-entity-id";
import type { ItemOrderRepository } from "@/domain/inventory/application/repositories/item-order-repository";
import { SaleOrder } from "../purchase-orders/enterprise/entities/sale-order";

interface ItemOrderUseCaseRequest {
  productId: string
  generateDate: Date
  isPending: boolean
  isFinished: boolean
  deliveryTime: string
}

export class OpenItemOrderUseCase {
  constructor(private itemOrderRepository: ItemOrderRepository) { }

  async execute({ productId, deliveryTime, generateDate, isFinished, isPending }: ItemOrderUseCaseRequest) {
    const itemOrder = SaleOrder.create({ 
      saleOrderId: new UniqueEntityID(),
      productId: new UniqueEntityID(productId),
      deliveryTime,
      generateDate: new Date(generateDate),
      isFinished, 
      isPending
    }
    )

    await this.itemOrderRepository.create(itemOrder)
    return itemOrder
  }
}