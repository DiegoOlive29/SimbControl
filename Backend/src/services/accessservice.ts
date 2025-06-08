import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAccess = async (
  name: string,
  date: string,
  time: string,
  accessType: string,
  status: string,
  options: string[]
) => {
  return await prisma.access.create({
    data: {
      name,
      date,
      time,
      accessType,
      status,
      options,
    },
  });
};

export const getAllAccess = async () => {
  return await prisma.access.findMany();
};

export const getAccessById = async (id: string) => {
  return await prisma.access.findUnique({ where: { id } });
};

export const deleteAccess = async (id: string) => {
  return await prisma.access.delete({ where: { id } });
};
