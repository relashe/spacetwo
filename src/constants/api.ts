export const API_ENDPOINTS = {
  GOOGLE: {
    GET_USER_INFO: (accessToken: string) =>
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
  },
};

export enum STATUS_CODE {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  INTERNAL_ERROR = 500,
}
