import type { Propertie } from '../../enterprise/entities/properties'
import type { ProductRepository } from '../repositories/product-repositroy'

interface AddNewPropertieInAProductUseCaseRequest {
  id: string
  newPropertie: Propertie
}

interface AddNewPropertieInAProductUseCaseRespoinse {}

export class AddNewPropertieInAProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    id,
    newPropertie,
  }: AddNewPropertieInAProductUseCaseRequest): Promise<AddNewPropertieInAProductUseCaseRespoinse> {
    const item = await this.productRepository.find(id)

    item.properties.push(newPropertie)

    return { item }
  }
}
