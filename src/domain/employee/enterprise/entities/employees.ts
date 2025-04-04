import { Entity } from "@/core/entitites/entity"
import type { UniqueEntityID } from "@/core/entitites/unique-entity-id"
import type { Roles } from "./roles"

type Status = "active" | "unactive" | "in leave"

interface EmployeeProps {
  name: string
  role: Roles
  hireDate: Date
  status: Status
}

export class Employee extends Entity<EmployeeProps> {
  get name() {
    return this.props.name
  }

  get role() {
    return this.props.role
  }

  get hireDate() {
    return this.props.hireDate
  }

  get status() {
    return this.props.status
  }

  set name(name: string) {
    this.props.name == name
  }

  set role(role: Roles) {
    this.props.role == role
  }

  set status(status: string) {
    this.props.status == status
  }

  static create(props: EmployeeProps, id?: UniqueEntityID) {
    const newEmployee = new Employee({
      ...props,
      hireDate: new Date()
    }, id)

    return newEmployee
  }
} 