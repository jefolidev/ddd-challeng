import { Storage } from '../../enterprise/entities/storage'
import { StorageRepository } from '../repositories/storage-repository'

interface UpdateStorageMinQuantityUseCaseRequest {
  id: string
  newLimit: number
}

interface UpdateStorageMinQuantityUseCaseResponse {
  updatedItem: Storage
}

export class UpdateStorageMinQuantityUseCase {
  constructor(private storageRepository: StorageRepository) {}

  async execute({ id, newLimit }: UpdateStorageMinQuantityUseCaseRequest) {
    const item: Storage = await this.storageRepository.find(id)

    const updatedItem = Storage.create({
      ...item.allItems,
      minLimitUntilWarn: newLimit,
    })

    await this.storageRepository.editItem(id, updatedItem)

    return { updatedItem }
  }
}
