export interface IBasicResponse {
  message: string;
}

export interface IError {
  response: {
    data: { error: string };
  };
}

export interface IBasicPostResponse<T> extends IBasicResponse {
  newRecord: T;
}
