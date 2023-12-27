"use server";

import { revalidatePath } from "next/cache";
import { dbContract } from "../domain/db/contract";

interface removeContract {
  id: string;
}

export async function removeContractAction(data: removeContract) {
  await dbContract.remove(data.id);
  revalidatePath("/contracts");
}
