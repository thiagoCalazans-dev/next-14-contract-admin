"use server";

import { revalidatePath } from "next/cache";
import { dbBiddingType } from "../domain/db/bidding-type";

interface createBiddingType {
  name: string;
}

export async function createBiddingTypeAction(data: createBiddingType) {
  await dbBiddingType.save(data);
  revalidatePath("/bidding-types");
}
