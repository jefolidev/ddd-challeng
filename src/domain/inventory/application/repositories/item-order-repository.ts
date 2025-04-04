import type { SaleOrder } from "@/domain/purchase-orders/enterprise/entities/sale-order";

export interface ItemOrderRepository {
  create(order: SaleOrder): Promise<void>
}