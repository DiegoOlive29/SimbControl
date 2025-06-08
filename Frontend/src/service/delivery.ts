import { IDelivery, ICreateDeliveryInput } from "../utils/types/delivery";
import { IBasicPostResponse } from "../utils/types/api";
import { apiClient } from "./axios";

export const getAllDeliveries = (): Promise<IDelivery[]> => {
  return apiClient.get("delivery").then((res) => res.data);
};

export const createDelivery = (
  payload: ICreateDeliveryInput
): Promise<IBasicPostResponse<IDelivery>> => {
  return apiClient.post("delivery", payload).then((res) => res.data);
};

export const deleteDelivery = (
  id: string
): Promise<IBasicPostResponse<IDelivery>> => {
  return apiClient.delete(`delivery/${id}`).then((res) => res.data);
};

export const getDeliveryById = (id: string): Promise<IDelivery> => {
  return apiClient.get(`delivery/${id}`).then((res) => res.data);
};
