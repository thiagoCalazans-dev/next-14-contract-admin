"use server";

import { dbEntity } from "../domain/db/entity";

export async function getEntitiesAction() {
  return await dbEntity.getAll();
}
