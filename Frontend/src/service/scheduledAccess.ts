import {
  ICreateScheduledAccessInput,
  IScheduleAccess,
} from "../utils/types/access";
import { IBasicPostResponse } from "../utils/types/api";
import { apiClient } from "./axios";

export const getAllScheduleAccess = (): Promise<IScheduleAccess[]> => {
  return apiClient.get("accessSchedule").then((response) => response.data);
};

export const createScheduleAccess = (
  payload: ICreateScheduledAccessInput
): Promise<IBasicPostResponse<IScheduleAccess>> => {
  return apiClient
    .post("accessSchedule", payload)
    .then((response) => response.data);
};

export interface IPostScheduleAccessResponseQRCode {
  email: string;
}
export const postAccessScheduleByEmailQrCode = (
  id: string,
  payload: IPostScheduleAccessResponseQRCode
) => {
  return apiClient
    .patch(`accessSchedule/email/${id}`, payload)
    .then((response) => response.data);
};
export interface Idenyentry {
  status: string;
}
export const denyentry = (id: string, payload: Idenyentry) => {
  return apiClient
    .patch(`accessSchedule/${id}`, payload)
    .then((response) => response.data);
};
