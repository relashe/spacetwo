import { Dexie, IndexableType, PromiseExtended } from "dexie";
import { IApiId } from "../types";

export class IndexedDbService {
  db!: Dexie;

  constructor(db: Dexie) {
    this.db = db;
  }

  getDbCollection<T>(tableKey: string): Promise<T[] | undefined> {
    return this.db.table<T>(tableKey).toArray();
  }

  getDbItemById<T>(
    tableKey: string,
    id: IApiId | IndexableType
  ): Promise<T | undefined> {
    return this.db.table<T>(tableKey).get(id);
  }

  storeDbItem<T>(tableKey: string, item: T): PromiseExtended<IndexableType> {
    return this.db.table<T>(tableKey).add(item);
  }

  storeDbCollection<T>(
    tableKey: string,
    collection: T[]
  ): PromiseExtended<IndexableType> {
    return this.db.table<T>(tableKey).bulkAdd(collection);
  }

  //   updateDbItem<T>(
  //     tableKey: string,
  //     itemKey: number,
  //     updates: Partial<T>
  //   ): PromiseExtended<IndexableType> {
  //     return this.db.table<T>(tableKey).update(itemKey, updates);
  //   }

  deleteDbItem<T>(tableKey: string, id: IApiId): PromiseExtended<void> {
    return this.db.table<T>(tableKey).delete(id);
  }

  deleteDbItemByKey<T>(
    tableKey: string,
    columnKey: string,
    value: string
  ): PromiseExtended<number> {
    return this.db.table<T>(tableKey).where(columnKey).equals(value).delete();
  }

  deleteDbCollection<T>(tableKey: string): PromiseExtended<void> {
    return this.db.table<T>(tableKey).clear();
  }
}
