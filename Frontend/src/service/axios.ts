import axios, { AxiosResponse } from "axios";

const BASE_LOCAL_URL = import.meta.env.VITE_BASE_API_URL;
const TOKEN_STORAGE_KEY = import.meta.env.TOKEN_STORAGE_KEY;

export const apiClient = axios.create({
  baseURL: BASE_LOCAL_URL,
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data instanceof Blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const errorObject = JSON.parse(reader.result as string);
            error.response.data = errorObject;
            resolve(Promise.reject(error));
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (e) {
            reject(error);
          }
        };
        reader.onerror = () => reject(error);
        reader.readAsText(error.response.data);
      });
    }
    return Promise.reject(error);
  }
);

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let signOutHandler: () => void;

export function setSignOutHandler(handler: () => void): void {
  signOutHandler = handler;
}

const logOutErrors = [
  "Token expired",
  "Unauthorized",
  "Forbidden",
  "User does not exists",
];

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && logOutErrors.includes(error.response.data.message)) {
      if (signOutHandler) {
        signOutHandler();
      }
    }
    return Promise.reject(error);
  }
);
