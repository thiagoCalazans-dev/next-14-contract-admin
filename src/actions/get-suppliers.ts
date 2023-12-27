"use server";

import { dbSupplier } from "../domain/db/supplier";

export async function getSuppliersAction() {
  return await dbSupplier.getAll();
}
