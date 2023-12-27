"use server";

import { dbContract } from "../domain/db/contract";

export async function getContractsAction() {
  return await dbContract.getAll();
}
