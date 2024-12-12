import axios, { AxiosRequestConfig } from "axios";

export class ApiService {
  constructor() {}

  async get<TResponse>(
    endpoint: string,
    accessToken: string
  ): Promise<TResponse | undefined> {
    try {
      const response = await axios.get<TResponse>(endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });

      return response.data;
    } catch (e: unknown) {}
  }
}
