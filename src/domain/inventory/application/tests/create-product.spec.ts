import { UniqueEntityID } from '@/core/entitites/unique-entity-id'
import { InMemoryProductsRepository } from '@/tests/repositories/in-memory-products.repository'
import { Propertie } from '../../enterprise/entities/properties'
import { CreateProductUseCase } from '../use-cases/create-product'

let inMemoryProductsRepository: InMemoryProductsRepository
let sut: CreateProductUseCase

describe('Create A Product', () => {
  beforeEach(() => {
    inMemoryProductsRepository = new InMemoryProductsRepository()
    sut = new CreateProductUseCase(inMemoryProductsRepository)
  })

  it('should be able to create a prodcut', async () => {
    const properties = []

    const propertie = Propertie.create({
      productId: new UniqueEntityID(),
      name: 'Cor',
      content: 'Azul',
    })

    properties.push(propertie)

    const { product } = await sut.execute({
      id: 'BR1234',
      name: 'Mug',
      properties,
      salePrice: 'R$150,00',
    })

    expect(inMemoryProductsRepository.items[0].id).toEqual(product.id)
    expect(inMemoryProductsRepository.items[0].properties).toMatchObject(
      product.properties
    )
  })
})
