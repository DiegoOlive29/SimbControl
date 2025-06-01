// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dateValueFormatter = (params: any) => {
  if (!params.value) return "";
  const [year, month, day] = params.value.split("-");
  return `${day}/${month}/${year}`;
};
