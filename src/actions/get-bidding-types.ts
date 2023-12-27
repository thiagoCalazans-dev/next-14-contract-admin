"use server";

import { dbBiddingType } from "../domain/db/bidding-type";

export async function getBiddingTypesAction() {
  return await dbBiddingType.getAll();
}
