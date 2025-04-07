import { Dispatch, SetStateAction } from "react";

export const handleDataChange = <T, K>(
  state: T,
  setState: Dispatch<SetStateAction<T>>,
  valueKey: keyof T,
  value: K
): void => {
  setState({ ...state, [valueKey]: value });
};
