import { Entity } from "@/core/entitites/entity";
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id";
import type { Product } from "./products";
import type { Sale } from "./sales";

interface SalesHistoryProps {
  sales: Sale[]
  historyGeneratedDate: Date
  profitGeneratedInAPeriod: number
  whichItemWasSoldTheMost: Product[]
  whichItemWasSoldInAPeriod: Product[]
}

export class SaleHistory extends Entity<SalesHistoryProps> {
  get sales() {
    return this.props.sales
  }

  get historyGeneratedDate() {
    return this.props.historyGeneratedDate
  }

  get profitGeneratedInAPeriod() {
    return this.props.profitGeneratedInAPeriod
  }

  get whichItemWasSoldTheMost() {
    return this.props.whichItemWasSoldTheMost
  }

  get whichItemWasSoldInAPeriod() {
    return this.props.whichItemWasSoldInAPeriod
  }

  create(props: SalesHistoryProps, id: UniqueEntityID) {
    const newSaleSearch = new SaleHistory({
      ...props,
    }, id)

    return newSaleSearch
  }
}