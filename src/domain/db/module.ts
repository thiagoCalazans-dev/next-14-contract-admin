import { adapterModule } from "../adapters/module";
import { Module } from "../entities/module";
import { db } from "./config";

async function getAll(): Promise<Module[]> {
  const dbModules = await db.module.findMany();

  const modules = dbModules.map((dbModule) =>
    adapterModule.dbToDomain(dbModule)
  );
  return modules;
}

interface saveModule {
  name: string;
}

async function save(data: saveModule): Promise<void> {
  await db.module.create({
    data: {
      name: data.name,
    },
  });
}

async function remove(id: string): Promise<void> {
  await db.module.delete({
    where: {
      id,
    },
  });
}

export const dbModule = {
  getAll,
  save,
  remove,
};
