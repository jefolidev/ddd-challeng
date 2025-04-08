import { Storage } from '@/domain/inventory/enterprise/entities/storage'

export interface StorageRepository {
  create(newItems: Storage): Promise<void>
  find(productId: string): Promise<Storage>
  editItem(productId: string, newData: Storage): Promise<Storage>
  // changeMinProductLimit(productId: string, newLimit: number): Promise<void>
}
