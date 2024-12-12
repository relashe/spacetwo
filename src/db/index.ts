import Dexie, { type EntityTable } from "dexie";
import { IndexedDbService } from "../services";
import { SpaceTwoDbQueryService } from "./query.helpers";
import { SpaceTwoBrand, SpaceTwoIndividual } from "../types";

export const spaceTwoDb = new Dexie("space-two-db") as Dexie & {
  individuals: EntityTable<SpaceTwoIndividual, "id">;
  brands: EntityTable<SpaceTwoBrand, "id">;
};

spaceTwoDb.version(1).stores({
  individuals: "++id, email, handle, dateCreated, name, lastName",
  brands: "++id, email, handle, dateCreated, name, individuals",
});

export const spaceTwoDbInterface = new IndexedDbService(spaceTwoDb);

export const spaceTwoDbQueryService = new SpaceTwoDbQueryService();
