"use server";

import { revalidatePath } from "next/cache";
import { dbEntity } from "../domain/db/entity";

interface createEntity {
  name: string;
}

export async function createEntityAction(data: createEntity) {
  await dbEntity.save(data);
  revalidatePath("/entitys");
}
