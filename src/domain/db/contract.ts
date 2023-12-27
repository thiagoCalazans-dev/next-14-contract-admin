import { adapterContract } from "../adapters/contract";
import { Contract } from "../entities/contract";
import { db, dbType } from "./config";

const dbContractValidator = dbType.validator<dbType.ContractDefaultArgs>()({
  include: { bidding_type: true, amendments: true, supplier: true },
});

export type dbContract = dbType.ContractGetPayload<typeof dbContractValidator>;

async function getAll(): Promise<Contract[]> {
  const dbContracts = await db.contract.findMany({
    include: {
      bidding_type: true,
      supplier: true,
      amendments: true,
    },
  });

  const contracts = dbContracts.map((dbContract) =>
    adapterContract.dbToDomain(dbContract)
  );
  return contracts;
}

// interface saveContract {
//   name: string;
// }

// async function save(data: saveContract): Promise<void> {
//   await db.contract.create({
//     data: {
//       name: data.name,
//     },
//   });
// }

async function remove(id: string): Promise<void> {
  await db.contract.delete({
    where: {
      id,
    },
  });
}

export const dbContract = {
  getAll,
  // save,
  remove,
};
