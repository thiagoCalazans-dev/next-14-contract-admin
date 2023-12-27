import { adapterEntity } from "../adapters/entity";
import { Entity } from "../entities/entity";
import { db } from "./config";

async function getAll(): Promise<Entity[]> {
  const dbEntitys = await db.entity.findMany();

  const entities = dbEntitys.map((dbEntity) =>
    adapterEntity.dbToDomain(dbEntity)
  );
  return entities;
}

interface saveEntity {
  name: string;
}

async function save(data: saveEntity): Promise<void> {
  await db.entity.create({
    data: {
      name: data.name,
    },
  });
}

async function remove(id: string): Promise<void> {
  await db.entity.delete({
    where: {
      id,
    },
  });
}

export const dbEntity = {
  getAll,
  save,
  remove,
};
