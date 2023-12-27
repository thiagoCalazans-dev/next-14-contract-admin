"use server";

import { revalidatePath } from "next/cache";
import { dbModule } from "../domain/db/module";

interface createModule {
  name: string;
}

export async function createModuleAction(data: createModule) {
  await dbModule.save(data);
  revalidatePath("/modules");
}
