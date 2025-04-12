import { ProductRepository } from '@/domain/inventory/application/repositories/product-repositroy'
import { SaleHistory } from '../../enterprise/entities/sales-history'
import { SaleHistoryRepository } from '../repository/sale-history.repository'
import { SaleRepository } from '../repository/sale.repository'

interface CreateSalesHistoryUseCaseRequest {
  initialDate?: Date
  lastDate?: Date
}

interface CreateSalesHistoryUseCaseResponse {
  saleHistory: SaleHistory
}

export class CreateSalesHistoryUseCase {
  constructor(
    private saleHistoryRepository: SaleHistoryRepository,
    private salesRepository: SaleRepository,
    private productRepository: ProductRepository
  ) {}

  async execute({
    initialDate,
    lastDate,
  }: CreateSalesHistoryUseCaseRequest): Promise<CreateSalesHistoryUseCaseResponse> {
    if (initialDate && lastDate) {
      const saleBetweenDates = await this.salesRepository.findBetwenDates(
        initialDate,
        lastDate
      )

      const profitGeneratedInAPeriod = saleBetweenDates.reduce(
        (total, item) => {
          return total + item.totalValue
        },
        0
      )

      const productCount: Record<string, number> = {}

      for (const sale of saleBetweenDates) {
        for (const item of sale.saledItems) {
          const { productId } = item
          if (!productId) continue

          productCount[productId] = (productCount[productId] || 0) + 1
        }
      }

      const mostSoldProductId = Object.entries(productCount).reduce(
        (prev, curr) => (curr[1] > prev[1] ? curr : prev),
        ['', 0]
      )[0]

      const whichItemWasSoldInAPeriod = await this.productRepository.find(
        mostSoldProductId
      )

      const saleHistory = SaleHistory.create({
        sales: saleBetweenDates,
        profitGeneratedInAPeriod,
        whichItemWasSoldInAPeriod,
      })

      await this.saleHistoryRepository.create(saleHistory)

      return { saleHistory }
    }

    const sales = await this.salesRepository.findAll()

    const profitGeneratedInAPeriod = sales.reduce((total, item) => {
      return total + item.totalValue
    }, 0)

    const productCount: Record<string, number> = {}

    for (const sale of sales) {
      for (const item of sale.saledItems) {
        const { productId } = item
        if (!productId) continue

        productCount[productId] = (productCount[productId] || 0) + 1
      }
    }

    const mostSoldProductId = Object.entries(productCount).reduce(
      (prev, curr) => (curr[1] > prev[1] ? curr : prev),
      ['', 0]
    )[0]

    const whichItemWasSoldTheMost = await this.productRepository.find(
      mostSoldProductId
    )

    const saleHistory = SaleHistory.create({
      sales,
      profitGeneratedInAPeriod,
      whichItemWasSoldTheMost,
    })

    await this.saleHistoryRepository.create(saleHistory)

    return { saleHistory }
  }
}
