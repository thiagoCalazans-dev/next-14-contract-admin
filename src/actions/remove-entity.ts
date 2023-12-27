"use server";

import { revalidatePath } from "next/cache";
import { dbEntity } from "../domain/db/entity";

interface removeEntity {
  id: string;
}

export async function removeEntityAction(data: removeEntity) {
  await dbEntity.remove(data.id);
  revalidatePath("/entities");
}
