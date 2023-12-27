"use server";

import { revalidatePath } from "next/cache";
import { dbModule } from "../domain/db/module";

interface removeModule {
  id: string;
}

export async function removeModuleAction(data: removeModule) {
  await dbModule.remove(data.id);
  revalidatePath("/modules");
}
