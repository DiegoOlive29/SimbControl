export interface IScheduleAccess {
  id: string;
  name: string;
  date: string;
  document: string;
  responsible: string;
  accessType: string;
  permissionType: string;
  status: string;
}
export interface Iloadunload {
  id: string;
  placa: string;
  motorista: string;
  veiculo: string;
  data: string;
  chegadaportaria: string;
  horarioentrada?: string | null;
  horariosaida?: string | null;
  atividade: "Carga" | "Descarga";
}
export interface ICreateScheduledAccessInput {
  name: string;
  date: string;
  document: string;
  responsible: string;
  accessType: string;
  permissionType: string;
  status: string;
}
