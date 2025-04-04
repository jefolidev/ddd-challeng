import type { StorageProps } from "@/domain/entities/storage";


export interface StorageRepository {
  create(storage: StorageProps[]): Promise<StorageProps[]>
}