import { Entity } from "@/core/entitites/entity";
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id";
import type { Permission } from "./permissions";

interface RolesPrps {
  roleId: string
  name: string
  permissions: Permission[]
}

export class Roles extends Entity<RolesPrps> {
  get name() {
    return this.props.name
  }

  get permissions() {
    return this.props.permissions
  }

  set name(name: string) {
    this.props.name = name
  }

  set permissions(permissions: Permission[]) {
    this.props.permissions = permissions
  }

  create(props: RolesPrps, id: UniqueEntityID) {
    const newRole = new Roles({
      ...props
    }, id)

    return newRole
  }

}