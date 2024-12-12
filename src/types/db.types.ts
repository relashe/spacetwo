import { PartialBy } from ".";
import { IDateTimespan } from "./date.types";

export type IDbId = number;

export type SpaceTwoUserTypes = "individual" | "brand";

export enum SpaceTwoDbTables {
  INDIVIDUALS = "individuals",
  BRANDS = "brands",
  BRAND_USERS = "brand_individuals",
}

export interface SpaceTwoBaseUser {
  id: IDbId;
  email: string;
  handle?: string;
  name: string;
  type?: SpaceTwoUserTypes;
  dateCreated?: IDateTimespan;
}

export interface SpaceTwoIndividual extends PartialBy<SpaceTwoBaseUser, "id"> {
  lastName?: string;
}

export interface SpaceTwoBrand extends PartialBy<SpaceTwoBaseUser, "id"> {
  individuals?: SpaceTwoIndividual[];
}

export interface SpaceTwoNewUser extends Omit<SpaceTwoBaseUser, "id"> {}
