import { IAccess, ICreateAccessInput } from "../utils/types/access";
import { IBasicPostResponse } from "../utils/types/api";
import { apiClient } from "./axios";

export const getAllAccess = (): Promise<IAccess[]> => {
  return apiClient.get("access").then((res) => res.data);
};

export const createAccess = (
  payload: ICreateAccessInput
): Promise<IBasicPostResponse<IAccess>> => {
  return apiClient.post("access", payload).then((res) => res.data);
};

export const deleteAccess = (
  id: string
): Promise<IBasicPostResponse<IAccess>> => {
  return apiClient.delete(`access/${id}`).then((res) => res.data);
};

export const getAccessById = (id: string): Promise<IAccess> => {
  return apiClient.get(`access/${id}`).then((res) => res.data);
};
