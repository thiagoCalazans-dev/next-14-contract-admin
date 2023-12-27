"use server";

import { revalidatePath } from "next/cache";
import { dbSupplier } from "../domain/db/supplier";

interface removeSupplier {
  id: string;
}

export async function removeSupplierAction(data: removeSupplier) {
  await dbSupplier.remove(data.id);
  revalidatePath("/suppliers");
}
