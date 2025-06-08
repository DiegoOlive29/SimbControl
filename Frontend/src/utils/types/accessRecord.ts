export interface IAccessRecord {
  id: string;
  name: string;
  email?: string;
  date: string;
  document: string;
  responsible: string;
  accessType: "Prestador" | "Visita";
  permissionType: "Único" | "Permanente";
  status: "Liberado" | "Bloqueado" | "Pendente";
}

export interface ICreateAccessRecordInput {
  name: string;
  email?: string;
  date: string;
  document: string;
  responsible: string;
  accessType: "Prestador" | "Visita";
  permissionType: "Único" | "Permanente";
  status: "Liberado" | "Bloqueado" | "Pendente";
}
