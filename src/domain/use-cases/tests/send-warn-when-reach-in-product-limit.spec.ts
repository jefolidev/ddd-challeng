import type { Warn } from "@/domain/entities/warns";
import type { WarnRepository } from "@/repositories/warn-repository";
import { SendWarnWhenReachInProductLimit } from "../send-warn-when-reach-product-limit";

const fakeWarnRepository: WarnRepository = {
  create: async (warn: Warn) => {
    return
  }
}

test('send a warn', async () => {
  const sendWarn = new SendWarnWhenReachInProductLimit(fakeWarnRepository)

  const warn = await sendWarn.execute({
    message: "O produto atingiu o número de itens mínimos. Gerando uma ordem de pedido.",
    productId: "product-1",
  })

  expect(warn?.message).toEqual("O produto atingiu o número de itens mínimos. Gerando uma ordem de pedido.")
})