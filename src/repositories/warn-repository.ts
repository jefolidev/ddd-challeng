import type { Warn } from "@/domain/entities/warns";

export interface WarnRepository {
  create(warn: Warn): Promise<void>
}