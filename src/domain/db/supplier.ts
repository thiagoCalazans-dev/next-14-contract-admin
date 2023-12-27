import { adapterSupplier } from "../adapters/supplier";
import { Supplier } from "../entities/supplier";
import { db } from "./config";

async function getAll(): Promise<Supplier[]> {
  const dbSuppliers = await db.supplier.findMany();

  const supplier = dbSuppliers.map((dbSupplier) =>
    adapterSupplier.dbToDomain(dbSupplier)
  );
  return supplier;
}

interface saveSupplier {
  number?: number;
  name: string;
  cnpj: string;
  zipCode: string;
  city: string;
  address: string;
  neighborhood: string;
  observation?: string;
}

async function save(data: saveSupplier): Promise<void> {
  await db.supplier.create({
    data: {
      city: data.city,
      cnpj: data.cnpj,
      name: data.name,
      neighborhood: data.neighborhood,
      number: data.number,
      address: data.address,
      zip_code: data.zipCode,
      observation: data.observation,
    },
  });
}

async function remove(id: string): Promise<void> {
  await db.supplier.delete({
    where: {
      id,
    },
  });
}

export const dbSupplier = {
  getAll,
  save,
  remove,
};
