import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createDelivery = async (data: {
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
}) => {
  return await prisma.delivery.create({ data });
};

export const getAllDeliveries = async () => {
  return await prisma.delivery.findMany();
};

export const getDeliveryById = async (id: string) => {
  return await prisma.delivery.findUnique({ where: { id } });
};

export const deleteDelivery = async (id: string) => {
  return await prisma.delivery.delete({ where: { id } });
};
