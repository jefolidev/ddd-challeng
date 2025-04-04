import { InMemoryPropertiesRespository } from "@/tests/repositories/in-memory-properties.repository"
import { CreatePropertieUseCase } from "../use-cases/create-propertie"

let inMemoryPropertiesRepository: InMemoryPropertiesRespository
let sut: CreatePropertieUseCase

describe("Create Properties", () => {
  beforeEach(() => {
    inMemoryPropertiesRepository = new InMemoryPropertiesRespository()
    sut = new CreatePropertieUseCase(inMemoryPropertiesRepository)
  })

  it('should be able to create a propertie', async () => {
      const { propertie } = await sut.execute({
        id: '1',
        name: "Cor",
        content: "Azul"
      })

      expect(inMemoryPropertiesRepository.items[0].id).toEqual(propertie.id)
  })
})