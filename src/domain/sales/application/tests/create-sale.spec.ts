import { UniqueEntityID } from '@/core/entitites/unique-entity-id'
import { InMemorySaleRepository } from '@/tests/repositories/in-memory-sale.repository'
import { CreateSaleUseCase } from '../use-cases/create-sale'

let inMemorySaleRepository: InMemorySaleRepository
let sut: CreateSaleUseCase

describe('Create A Sale', () => {
  beforeEach(() => {
    inMemorySaleRepository = new InMemorySaleRepository()
    sut = new CreateSaleUseCase(inMemorySaleRepository)
  })

  it('should be possible to create a sale', async () => {
    const { newSale } = await sut.execute({
      items: [
        {
          productId: new UniqueEntityID('produto1').toString(),
          quantity: 4,
          unitPrice: 20.99,
        },
      ],
      paymentMethod: 'credit',
    })

    expect(inMemorySaleRepository.items[0].id).toBe(newSale.id)
  })
})
