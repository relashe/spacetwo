// CORE COMPONENTS
export * from "./api.types";
export * from "./db.types";
export * from "./date.types";

// used for setting partials on particular properties
// https://stackoverflow.com/questions/43159887/make-a-single-property-optional-in-typescript/54178819#54178819
// not currently built into typescript
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// used for forcing an object to have at least one of the properties set
// https://stackoverflow.com/a/49725198/6349735
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];
