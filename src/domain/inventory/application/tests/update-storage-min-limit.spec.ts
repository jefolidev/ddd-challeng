import { UniqueEntityID } from '@/core/entitites/unique-entity-id'
import { InMemoryStorageRepository } from '@/tests/repositories/in-memory-storage.repository'
import { Storage } from '../../enterprise/entities/storage'
import { UpdateStorageMinQuantityUseCase } from '../use-cases/update-storage-min-quantity'

let inMemoryStorageRepository: InMemoryStorageRepository
let sut: UpdateStorageMinQuantityUseCase

describe('Edit A Item Limit Storage', () => {
  beforeEach(() => {
    inMemoryStorageRepository = new InMemoryStorageRepository()
    sut = new UpdateStorageMinQuantityUseCase(inMemoryStorageRepository)
  })

  it('should be able to update the sotrage min limit', async () => {
    const storage = Storage.create({
      productId: new UniqueEntityID('storage-01'),
      isOpenedOrder: false,
      isWarnOpened: false,
      minLimitUntilWarn: 20,
      productQuantity: 40,
    })

    await inMemoryStorageRepository.create(storage)

    await sut.execute({
      id: storage.productId.toString(),
      newLimit: 10,
    })

    expect(inMemoryStorageRepository.items[0].minLimitUntilWarn).toEqual(10)
  })
})
