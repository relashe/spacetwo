import { IApiId } from "./api.types";

export interface GoogleProfile {
  email: string;
  family_name: string;
  given_name: string;
  hd?: string;
  id: IApiId;
  name: string;
  picture: string;
  verified_email: boolean;
}
