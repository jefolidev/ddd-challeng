import { UniqueEntityID } from '@/core/entitites/unique-entity-id'
import { InMemoryProductsRepository } from '@/tests/repositories/in-memory-products.repository'
import { Product } from '../../enterprise/entities/products'
import { Propertie } from '../../enterprise/entities/properties'
import { AddNewPropertieInAProductUseCase } from '../use-cases/add-new-properties-in-product'

let inMemoryProductsRepository: InMemoryProductsRepository
let sut: AddNewPropertieInAProductUseCase

describe('Add Propertie Into A Product', () => {
  beforeEach(() => {
    inMemoryProductsRepository = new InMemoryProductsRepository()
    sut = new AddNewPropertieInAProductUseCase(inMemoryProductsRepository)
  })

  it('should be able to add a new propertie into a product', async () => {
    const properties = []

    const propertie = Propertie.create({
      id: new UniqueEntityID('dress-01'),
      name: 'Cor',
      content: 'Vermelho',
    })

    properties.push(propertie)

    const product = Product.create({
      id: new UniqueEntityID('product-1'),
      name: 'Dress',
      properties,
      salePrice: '120',
    })

    inMemoryProductsRepository.items.push(product)

    const newPropertie = Propertie.create({
      id: new UniqueEntityID(),
      name: 'Tamanho',
      content: '25cm',
    })

    await sut.execute({
      id: product.id.toString(),
      newPropertie,
    })

    expect(inMemoryProductsRepository.items[0].id.toString()).toMatch(
      product.id.toString()
    )
    expect(inMemoryProductsRepository.items[0].properties).toHaveLength(2)
  })
})
