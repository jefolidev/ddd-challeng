import type { PropertieRepository } from "@/domain/inventory/application/repositories/propertie-repository";
import type { Propertie } from "@/domain/inventory/enterprise/entities/properties";

export class InMemoryPropertiesRespository implements PropertieRepository {
  public items: Propertie[] = []

  async create(properties: Propertie) {
    this.items.push(properties)
  }
}