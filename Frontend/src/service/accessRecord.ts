import {
  IAccessRecord,
  ICreateAccessRecordInput,
} from "../utils/types/accessRecord";
import { IBasicPostResponse } from "../utils/types/api";
import { apiClient } from "./axios";

export const getAllAccessRecords = (): Promise<IAccessRecord[]> => {
  return apiClient.get("access-record").then((res) => res.data);
};

export const createAccessRecord = (
  payload: ICreateAccessRecordInput
): Promise<IBasicPostResponse<IAccessRecord>> => {
  return apiClient.post("access-record", payload).then((res) => res.data);
};

export const deleteAccessRecord = (
  id: string
): Promise<IBasicPostResponse<IAccessRecord>> => {
  return apiClient.delete(`access-record/${id}`).then((res) => res.data);
};

export const getAccessRecordById = (id: string): Promise<IAccessRecord> => {
  return apiClient.get(`access-record/${id}`).then((res) => res.data);
};
