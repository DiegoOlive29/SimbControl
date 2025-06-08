import { Request, Response } from "express";
import {
  createAccessRecord,
  getAllAccessRecords,
  getAccessRecordById,
  deleteAccessRecord,
} from "../services/accessRecordService";

export const postAccessRecordController = async (
  req: Request,
  res: Response
) => {
  try {
    const newAccessRecord = await createAccessRecord(req.body);
    res.status(201).json({
      message: "Registro de acesso criado com sucesso",
      newAccessRecord,
    });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getAllAccessRecordsController = async (
  _req: Request,
  res: Response
) => {
  const records = await getAllAccessRecords();
  res.json(records);
};

export const getAccessRecordByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const record = await getAccessRecordById(id);
  record
    ? res.json(record)
    : res.status(404).json({ error: "Registro não encontrado" });
};

export const deleteAccessRecordController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  await deleteAccessRecord(id);
  res.json({ message: "Registro de acesso excluído com sucesso" });
};
