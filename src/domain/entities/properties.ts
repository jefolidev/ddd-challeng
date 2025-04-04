import { Entity } from "@/core/entitites/entity";
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id";

export interface PropertiesProps {
  productId: UniqueEntityID
  name: string
  content: string | number | boolean
}

export class Propertie extends Entity<PropertiesProps> {
  get productId() {
    return this.props.productId
  }

  get name() {
    return this.props.name
  }

  get content() {
    return this.props.content
  }

  create(props: PropertiesProps, id: UniqueEntityID) {
    const newPropertie = new Propertie({
      ...props,
      productId: id,
    })

    return newPropertie
  }

  set name(name: string) {
    this.props.name = name
  }

  set content(content: string | number | boolean) {
    this.props.content = content
  }

}