import type { StorageRepository } from '@/domain/inventory/application/repositories/storage-repository'
import type { Storage } from '@/domain/inventory/enterprise/entities/storage'

export class InMemoryStorageRepository implements StorageRepository {
  public items: Storage[] = []

  async create(newItems: Storage) {
    this.items.push(newItems)
  }

  async find(productId: string): Promise<Storage> {
    const item = this.items.find((i) => i.productId.toString() === productId)

    if (!item) {
      throw new Error('Item not founded.')
    }

    return item
  }

  async editItem(productId: string, newData: Storage): Promise<Storage> {
    const item = this.items.findIndex(
      (i) => i.productId.toString() === productId
    )

    if (item === -1) {
      throw new Error('Produto não encontrado.')
    }

    this.items[item] = newData
    return newData
  }
}
