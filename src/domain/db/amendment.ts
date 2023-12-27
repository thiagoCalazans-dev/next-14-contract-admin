import { adapterAmendment } from "../adapters/amendment";
import { Amendment } from "../entities/amendment";
import { db } from "./config";

async function getAll(): Promise<Amendment[]> {
  const dbAmendments = await db.amendment.findMany();

  const amendments = dbAmendments.map((dbAmendment) =>
    adapterAmendment.dbToDomain(dbAmendment)
  );
  return amendments;
}

// interface saveAmendment {
//   name: string;
// }

// async function save(data: saveAmendment): Promise<void> {
//   await db.amendment.create({
//     data: {
//       name: data.name,
//     },
//   });
// }

async function remove(id: string): Promise<void> {
  await db.amendment.delete({
    where: {
      id,
    },
  });
}

export const dbAmendment = {
  getAll,
  // save,
  remove,
};
