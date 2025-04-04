import { UniqueEntityID } from "@/core/entitites/unique-entity-id"
import type { SaleOrder } from "@/domain/entities/sale-order"
import type { ItemOrderRepository } from "@/repositories/item-order-repository"
import { OpenItemOrderUseCase } from "../open-item-order"

const fakeItemOrderRepository: ItemOrderRepository = {
  create: async (itemOrder: SaleOrder) => {
    return
  }
}

test('if is open a sale order', async () => {
  const openItemOrder = new OpenItemOrderUseCase(fakeItemOrderRepository)

  const itemOrder = await openItemOrder.execute({
    productId: new UniqueEntityID("product-1").toString(),
    deliveryTime: "2d", 
    generateDate: new Date(), 
    isFinished: false,
    isPending: true
  })

  expect(itemOrder.productId.toString()).toEqual("product-1")
})