import { Entity } from "@/core/entitites/entity";
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id";

interface WarnProps {
  productId: UniqueEntityID
  message: string
}

export class Warn extends Entity<WarnProps> {
  get productId() {
    return this.props.productId
  }

  get message() {
    return this.props.message
  }

  set message(message: string) {
    this.props.message = message
  }

  static create(props: WarnProps) {
    const newWarn = new Warn({
      ...props
    })

    return newWarn
  }
}