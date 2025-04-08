import { Entity } from '@/core/entitites/entity'
import { UniqueEntityID } from '@/core/entitites/unique-entity-id'

export interface PropertiesProps {
  id: UniqueEntityID
  name: string
  content: string | number | boolean
}

export class Propertie extends Entity<PropertiesProps> {
  get id() {
    return this.props.id
  }

  get name() {
    return this.props.name
  }

  get content() {
    return this.props.content
  }

  static create(props: PropertiesProps) {
    const newPropertie = new Propertie({
      ...props,
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
