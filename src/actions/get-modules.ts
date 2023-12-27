"use server";

import { dbModule } from "../domain/db/module";

export async function getModulesAction() {
  return await dbModule.getAll();
}
