"use server";

import { revalidatePath } from "next/cache";
import { dbBiddingType } from "../domain/db/bidding-type";

interface removeBiddingType {
  id: string;
}

export async function removeBiddingTypeAction(data: removeBiddingType) {
  await dbBiddingType.remove(data.id);
  revalidatePath("/bidding-types");
}
