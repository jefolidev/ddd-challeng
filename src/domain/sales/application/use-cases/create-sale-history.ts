import type { SaleHistory } from '../../enterprise/entities/sales-history'
import type { SaleHistoryRepository } from '../repository/sale-history.repository'

interface CreateSalesHistoryUseCaseRequest {}

interface CreateSalesHistoryUseCaseResponse {}

export class CreateSalesHistoryUseCase {
  constructor(private saleHistoryRepository: SaleHistoryRepository) {}

  async execute(): Promise<CreateSalesHistoryUseCaseResponse> {
    const saleHistoryOrder: SaleHistory = {}
  }
}
