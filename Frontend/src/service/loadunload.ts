import { Iloadunload } from "../utils/types/access";
import { IBasicPostResponse } from "../utils/types/api";
import { apiClient } from "./axios";

export const getAllloadunload = (): Promise<Iloadunload[]> => {
  return apiClient.get("load-unload").then((response) => response.data);
};

export const createloadunload = (
  payload: Iloadunload
): Promise<IBasicPostResponse<Iloadunload>> => {
  return apiClient
    .post("load-unload/register", payload)
    .then((response) => response.data);
};

export const deleteloadunload = (
  id: string
): Promise<IBasicPostResponse<Iloadunload>> => {
  return apiClient
    .delete(`load-unload/${id}`)
    .then((response) => response.data);
};
export interface IEntry {
  horarioentrada: string;
}
export const entryPatch = (id: string, payload: IEntry) => {
  return apiClient
    .patch(`load-unload/${id}`, payload)
    .then((response) => response.data);
};
export interface IOut {
  horariosaida: string;
}
export const outPatch = (id: string, payload: IOut) => {
  return apiClient
    .patch(`load-unload/${id}`, payload)
    .then((response) => response.data);
};
