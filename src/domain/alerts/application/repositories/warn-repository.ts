import type { Warn } from "@/domain/alerts/enterprise/entities/warns";

export interface WarnRepository {
  create(warn: Warn): Promise<void>
}