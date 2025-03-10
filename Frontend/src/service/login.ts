import { IBasicResponse } from "../utils/types/api";
import { apiClient } from "./axios";

export interface ILoginResponse extends IBasicResponse {
  token: string;
}

export const login = (
  email: string,
  password: string
): Promise<ILoginResponse> => {
  return apiClient
    .post("login", { email, password })
    .then((response) => response.data);
};
