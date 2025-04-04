import { UniqueEntityID } from "@/core/entitites/unique-entity-id";
import { Product } from "../../enterprise/entities/products";
import type { Propertie } from "../../enterprise/entities/properties";
import type { ProductRepository } from "../repositories/product-repositroy";

interface CreateProductUseCaseRequest {
  id: string
  name: string
  properties?: Propertie[]
  salePrice: string
}

interface CreateProductUseCaseResponse {}

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({id, name, salePrice, properties}: CreateProductUseCaseRequest) {
    const product = Product.create({
      id: new UniqueEntityID(id),
      name, 
      salePrice,
      properties: []
    })
  }

}