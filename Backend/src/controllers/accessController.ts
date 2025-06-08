import { Request, Response } from "express";
import {
  createAccess,
  getAllAccess,
  getAccessById,
  deleteAccess,
} from "../services/accessservice";

export const postAccessController = async (req: Request, res: Response) => {
  try {
    const { name, date, time, accessType, status, options } = req.body;

    const newAccess = await createAccess(
      name,
      date,
      time,
      accessType,
      status,
      options
    );
    res.status(201).json({ message: "Acesso criado com sucesso", newAccess });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getAllAccessController = async (_req: Request, res: Response) => {
  const accesses = await getAllAccess();
  res.json(accesses);
};

export const getAccessByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const access = await getAccessById(id);
  access
    ? res.json(access)
    : res.status(404).json({ error: "Registro não encontrado" });
};

export const deleteAccessController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteAccess(id);
  res.json({ message: "Registro removido com sucesso" });
};
