import type { SaleOrder } from "@/domain/entities/sale-order";

export interface ItemOrderRepository {
  create(order: SaleOrder): Promise<void>
}