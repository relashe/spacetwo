import { AxiosError } from "axios";

// TESTS
export const getErrorMessage = (e: unknown): string | undefined => {
  let message;
  if (typeof e === "string") {
    message = e;
  } else if (e instanceof Error) {
    message = e.message;
  }

  return message;
};

export const mapErrorMessage = (
  e: unknown | AxiosError,
  defaultError?: string
): string => {
  switch (true) {
    // case getErrorMessage(e) === `${STATUS_CODE.UNAUTHORIZED}` ||
    //   (e as AxiosError)?.response?.status === STATUS_CODE.UNAUTHORIZED:
    //   return `${STATUS_CODE.UNAUTHORIZED}`;
    // case getErrorMessage(e) === `${STATUS_CODE.INTERNAL_ERROR}` ||
    //   (e as AxiosError)?.response?.status === STATUS_CODE.INTERNAL_ERROR:
    //   return `${STATUS_CODE.INTERNAL_ERROR}`;
    // case getErrorMessage(e) === `${STATUS_CODE.BAD_REQUEST}` ||
    //   (e as AxiosError)?.response?.status === STATUS_CODE.BAD_REQUEST:
    //   return `${STATUS_CODE.BAD_REQUEST}`;
    default:
      return defaultError || "error";
  }
};
