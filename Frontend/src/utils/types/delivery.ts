export interface IDelivery {
  id: string;
  remetente: string;
  destinatario: string;
  recebido_por: string;
  nf: string;
  data: string;
  horario_de_recebimento: string;
  volumes: number;
  descricao: string;
  status: "Pendente" | "Retirado" | "Entregue";
  acoes: string[];
  observation: string;
  image: string;
}

export interface ICreateDeliveryInput {
  remetente: string;
  destinatario: string;
  recebido_por: string;
  nf: string;
  data: string;
  horario_de_recebimento: string;
  volumes: number;
  descricao: string;
  status: "Pendente" | "Retirado" | "Entregue";
  acoes: string[];
  observation: string;
  image: string;
}
