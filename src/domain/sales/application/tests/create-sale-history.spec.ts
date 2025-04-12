import { UniqueEntityID } from '@/core/entitites/unique-entity-id'
import { Product } from '@/domain/inventory/enterprise/entities/products'
import { InMemoryProductsRepository } from '@/tests/repositories/in-memory-products.repository'
import { InMemorySaleHistoryRepository } from '@/tests/repositories/in-memory-sale-history.repository'
import { InMemorySaleRepository } from '@/tests/repositories/in-memory-sale.repository'
import { Sale } from '../../enterprise/entities/sales'
import { CreateSalesHistoryUseCase } from '../use-cases/create-sale-history'

let inMemorySaleHistoryRepository: InMemorySaleHistoryRepository
let inMemoryProductRepository: InMemoryProductsRepository
let inMemorySaleRepository: InMemorySaleRepository
let sut: CreateSalesHistoryUseCase

describe('Create Sale History', () => {
  beforeEach(() => {
    inMemorySaleHistoryRepository = new InMemorySaleHistoryRepository()
    inMemoryProductRepository = new InMemoryProductsRepository()
    inMemorySaleRepository = new InMemorySaleRepository()

    sut = new CreateSalesHistoryUseCase(
      inMemorySaleHistoryRepository,
      inMemorySaleRepository,
      inMemoryProductRepository
    )
  })

  it('should be able to create a sale history', async () => {
    const sales: Sale[] = []

    const item = Product.create({
      id: new UniqueEntityID('product-1'),
      name: 'Chupeta',
      properties: [],
      salePrice: '40',
    })

    inMemoryProductRepository.create(item)

    const sale = Sale.create({
      saledItems: [
        {
          productId: item.id.toString(),
          quantity: 2,
          unitPrice: 50,
        },
      ],
      saleDate: new Date(),
      paymentMethod: 'pix',
    })

    sales.push(sale)
    inMemorySaleRepository.create(sale)

    const { saleHistory } = await sut.execute({
      initialDate: new Date('2025/03/20'),
      lastDate: new Date(),
    })

    inMemorySaleHistoryRepository.create(saleHistory)

    expect(inMemorySaleHistoryRepository.items[0].sales[0].id).toBe(sale.id)
  })
})
