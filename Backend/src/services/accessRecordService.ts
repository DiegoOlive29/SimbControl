import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createAccessRecord = async (data: {
  name: string;
  email?: string;
  date: string;
  document: string;
  responsible: string;
  accessType: "Prestador" | "Visita";
  permissionType: "Único" | "Permanente";
  status: "Liberado" | "Bloqueado" | "Pendente";
}) => {
  return await prisma.accessRecord.create({ data });
};

export const getAllAccessRecords = async () => {
  return await prisma.accessRecord.findMany();
};

export const getAccessRecordById = async (id: string) => {
  return await prisma.accessRecord.findUnique({ where: { id } });
};

export const deleteAccessRecord = async (id: string) => {
  return await prisma.accessRecord.delete({ where: { id } });
};
