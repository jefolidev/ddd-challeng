import type { WarnRepository } from "@/domain/alerts/application/repositories/warn-repository";
import type { Warn } from "@/domain/alerts/enterprise/entities/warns";
import { SendWarnWhenReachInProductLimit } from "../use-cases/create-warn-when-reach-limit";

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