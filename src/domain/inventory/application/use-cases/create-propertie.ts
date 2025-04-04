import { UniqueEntityID } from "@/core/entitites/unique-entity-id";
import { Propertie } from "../../enterprise/entities/properties";
import type { PropertieRepository } from "../repositories/propertie-repository";

interface CreatePropertieUseCaseRequest {
  id: string
  name: string
  content: string | number | boolean
}

interface CreatePropertieUseCaseResponse {
  propertie: Propertie
}

export class CreatePropertieUseCase {
  constructor (private propertieRepository: PropertieRepository){}

  async execute({id, name, content}: CreatePropertieUseCaseRequest): Promise<CreatePropertieUseCaseResponse>  {
    const propertie = Propertie.create({
      productId: new UniqueEntityID(id),
      name,
      content
    })

    await this.propertieRepository.create(propertie)
    return { propertie }
  }
}