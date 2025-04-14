import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface LoadUnloadInput {
  placa: string;
  motorista: string;
  veiculo: string;
  data: string;
  chegadaportaria: string;
  atividade: "Carga" | "Descarga";
  horarioentrada?: string;
  horariosaida?: string;
}

export const postLoadUnload = async (
  placa: string,
  motorista: string,
  veiculo: string,
  data: string,
  chegadaportaria: string,
  atividade: "Carga" | "Descarga",
  horarioentrada?: string,
  horariosaida?: string
) => {
  if (!["Carga", "Descarga"].includes(atividade)) {
    throw new Error("Atividade deve ser 'Carga' ou 'Descarga'.");
  }

  try {
    const newLoadUnload = await prisma.loadUnload.create({
      data: {
        placa,
        motorista,
        veiculo,
        data: new Date(data),
        chegadaportaria: chegadaportaria || "",
        horarioentrada: horarioentrada || "",
        horariosaida: horariosaida || "",
        atividade,
      },
    });

    return newLoadUnload;
  } catch (error) {
    throw new Error(`Erro ao criar registro: ${error instanceof Error ? error.message : String(error)}`);
  }
};

export const getLoadUnload = async (
  id?: string
) => {
  try {
    if (id) {
      const result = await prisma.loadUnload.findUnique({
        where: { id },
      });
      
      if (!result) {
        throw new Error("Registro não encontrado");
      }
      return result;
    }
    
    return await prisma.loadUnload.findMany();
  } catch (error) {
    throw new Error(`Erro ao buscar registro(s): ${error instanceof Error ? error.message : String(error)}`);
  }
};

export const updateLoadUnload = async (
  id: string,
  updates: Partial<LoadUnloadInput>
) => {
  try {
    const updated = await prisma.loadUnload.update({
      where: { id },
      data: updates,
    });

    if (!updated) {
      throw new Error("Registro não encontrado");
    }

    return updated;
  } catch (error) {
    throw new Error(`Erro ao atualizar registro: ${error instanceof Error ? error.message : String(error)}`);
  }
};

export const deleteLoadUnload = async (id: string) => {
  try {
    await prisma.loadUnload.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    throw new Error(`Erro ao deletar registro: ${error instanceof Error ? error.message : String(error)}`);
  }
};