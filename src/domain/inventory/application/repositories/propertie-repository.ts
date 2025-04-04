import type { Propertie } from "../../enterprise/entities/properties";

export interface PropertieRepository {
  create(propertieData: Propertie): Promise<void>
} 