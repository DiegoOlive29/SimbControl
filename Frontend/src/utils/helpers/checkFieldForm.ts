// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkFilledForm = (object: { [key: string]: any }): boolean => {
  return Object.values(object).some((value) => !value);
};
