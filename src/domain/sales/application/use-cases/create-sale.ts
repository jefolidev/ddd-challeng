import {
  Sale,
  type ItemSale,
  type PaymentMethodProps,
} from '../../enterprise/entities/sales'
import type { SaleRepository } from '../repository/sale.repository'

interface CreateSaleUseCaseRequest {
  items: ItemSale[]
  paymentMethod: PaymentMethodProps
}

interface CreateSaleUseCaseResponse {
  newSale: Sale
}

export class CreateSaleUseCase {
  constructor(private saleRepository: SaleRepository) {}

  async execute({
    items,
    paymentMethod,
  }: CreateSaleUseCaseRequest): Promise<CreateSaleUseCaseResponse> {
    const totalValue = items.reduce((total, item) => {
      return total + item.unitPrice
    }, 0)

    const newSale = Sale.create({
      saleDate: new Date(),
      saledItems: items,
      totalValue,
      paymentMethod,
    })

    await this.saleRepository.create(newSale)
    return { newSale }
  }
}
