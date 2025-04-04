import { Entity } from "@/core/entitites/entity"
import type { Propertie } from "./properties"

interface ProductProps {
  name: string
  properties: Propertie[]
  salePrice: string
}

export class Product extends Entity<ProductProps> {
  get name() {
    return this.props.name
  }

  get properties() {
    return this.props.properties
  }

  get salePrice() {
    return this.props.salePrice
  }

  set name(name: string) {
    this.props.name = name
  }

  set properties(properties: Propertie[]) {
    this.props.properties = properties
  }

  set salePrice(salePrice: string) {
    this.props.salePrice = salePrice
  }

  create(props: ProductProps) {
    const newProduct = new Product({
      ...props
    })

    return newProduct
  }
}