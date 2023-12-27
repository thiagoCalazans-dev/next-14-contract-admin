import { adapterBiddingType } from "../adapters/bidding-type";
import { BiddingType } from "../entities/bidding-type";
import { db } from "./config";

async function getAll(): Promise<BiddingType[]> {
  const dbBiddingTypes = await db.biddingType.findMany();

  const biddingTypes = dbBiddingTypes.map((dbBiddingType) =>
    adapterBiddingType.dbToDomain(dbBiddingType)
  );
  return biddingTypes;
}

interface saveBiddingType {
  name: string;
}

async function save(data: saveBiddingType): Promise<void> {
  await db.biddingType.create({
    data: {
      name: data.name,
    },
  });
}

async function remove(id: string): Promise<void> {
  await db.biddingType.delete({
    where: {
      id,
    },
  });
}

export const dbBiddingType = {
  getAll,
  save,
  remove,
};
