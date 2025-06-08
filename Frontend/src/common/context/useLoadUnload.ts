import { useState } from "react";
import {
  getAllloadunload,
  createloadunload,
  deleteloadunload,
  entryPatch,
  outPatch,
  IEntry,
  IOut,
} from "../../service/loadunload";
import { Iloadunload } from "../../utils/types/access";

export const useLoadUnload = () => {
  const [scheduledAccess, setScheduledAccess] = useState<Iloadunload[]>([]);
  const [isLoadingloadunload, setIsLoading] = useState(false);

  const getloadunload = async () => {
    setIsLoading(true);
    try {
      const data = await getAllloadunload();
      setScheduledAccess(data);
    } catch (error) {
      console.error("Erro ao buscar registros de carga/descarga:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addloadunload = async (payload: Iloadunload) => {
    try {
      await createloadunload(payload);
      await getloadunload();
    } catch (error) {
      console.error("Erro ao adicionar veículo:", error);
    }
  };

  const loadunloadDelete = async (id: string) => {
    try {
      await deleteloadunload(id);
      await getloadunload();
    } catch (error) {
      console.error("Erro ao deletar veículo:", error);
    }
  };

  const updateEntryTime = async (id: string, payload: IEntry) => {
    try {
      await entryPatch(id, payload);
      await getloadunload();
    } catch (error) {
      console.error("Erro ao atualizar entrada:", error);
    }
  };

  const updateOutTime = async (id: string, payload: IOut) => {
    try {
      await outPatch(id, payload);
      await getloadunload();
    } catch (error) {
      console.error("Erro ao atualizar saída:", error);
    }
  };

  return {
    scheduledAccess,
    isLoadingloadunload,
    getloadunload,
    addloadunload,
    loadunloadDelete,
    updateEntryTime,
    updateOutTime,
  };
};
