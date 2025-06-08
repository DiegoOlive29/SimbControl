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
  id?: string;
  placa: string;
  motorista: string;
  veiculo: string;
  data: string;
  chegadaportaria: string;
  horarioentrada?: string | null;
  horariosaida?: string | null;
  atividade: string;
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

export interface IAccess {
  id: string;
  name: string;
  date: string;
  time: string;
  accessType: string;
  status: string;
  options: string[];
}

export interface ICreateAccessInput {
  name: string;
  date: string;
  time: string;
  accessType: string;
  status: string;
  options: string[];
}
