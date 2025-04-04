import type { StorageProps } from "@/domain/inventory/enterprise/entities/storage";


export interface StorageRepository {
  create(storage: StorageProps[]): Promise<StorageProps[]>
}