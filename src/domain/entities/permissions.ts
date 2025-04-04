import { Entity } from "@/core/entitites/entity";
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id";

interface PermissionsProps {
  id: UniqueEntityID
  permissionName: string
}

export class Permission extends Entity<PermissionsProps> {
  get permissionName() {
    return this.props.permissionName
  }

  set permissionName(permissionName: string) {
    this.props.permissionName = permissionName
  }

  static create(props: PermissionsProps) {
    const newPermission = new Permission(props)

    return newPermission
  }
} 