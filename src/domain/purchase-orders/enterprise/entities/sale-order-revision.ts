import { Entity } from "@/core/entitites/entity";
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id";
import type { Optional } from "@/types/optional";

interface SaleOrderRevisionProps {
  orderReviewId: UniqueEntityID
  revisionDate: Date
  isApproved: boolean
  decisionDate?: Date
}

export class SaleOrderRevision extends Entity<SaleOrderRevisionProps> {
  get orderReviewId() {
    return this.props.orderReviewId
  }

  get revisionDate() {
    return this.props.revisionDate
  }

  get isApproved() {
    return this.props.isApproved
  }

  get decisionDate(): Date | undefined {
    return this.props.decisionDate
  }

  private touch() {
    this.props.decisionDate === new Date()
  }

  set orderReviewId(orderReviewId: UniqueEntityID) {
    this.props.orderReviewId = orderReviewId
  }

  set isApproved(isApproved: boolean) {
    this.props.isApproved = isApproved
    this.touch()
  }

  set decisionDate(decisionDate: Date) {
    this.props.decisionDate = decisionDate
  }

  create(props: Optional<SaleOrderRevision, 'decisionDate'>, id: UniqueEntityID) {
    const newSaleOrder = new SaleOrderRevision({
      ...props,
    }, id)

    return newSaleOrder
  }
}