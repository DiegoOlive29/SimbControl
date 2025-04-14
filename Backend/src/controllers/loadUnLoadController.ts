import { Request, Response } from "express";
import {
  postLoadUnload,
  getLoadUnload,
  updateLoadUnload,
  deleteLoadUnload,
} from "../services/loadUnloadService";

export const postLoadUnloadController = async (req: Request, res: Response) => {
  try {
    const {
      placa,
      motorista,
      veiculo,
      data,
      chegadaportaria,
      horarioentrada,
      horariosaida,
      atividade,
    } = req.body;

    const newLoadUnload = await postLoadUnload(
      placa,
      motorista,
      veiculo,
      data,
      chegadaportaria,
      atividade as "Carga" | "Descarga", // Garante o tipo correto
      horarioentrada,
      horariosaida
    );

    res.status(201).json({
      message: "Carga/Descarga cadastrada com sucesso",
      newLoadUnload,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro inesperado no servidor" });
    }
  }
};

export const getLoadUnloadController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = id ? await getLoadUnload(id) : await getLoadUnload();

    if (!result) {
      res.status(404).json({ message: "Registro não encontrado" });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro inesperado no servidor" });
    }
  }
};

export const updateLoadUnloadController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedLoadUnload = await updateLoadUnload(id, updates);

    if (!updatedLoadUnload) {
      res.status(404).json({ message: "Registro não encontrado" });
    } else {
      res.status(200).json({
        message: "Registro atualizado com sucesso",
        updatedLoadUnload,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro inesperado no servidor" });
    }
  }
};

export const deleteLoadUnloadController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const deleted = await deleteLoadUnload(id);

    if (!deleted) {
      res.status(404).json({ message: "Registro não encontrado" });
    } else {
      res.status(200).json({ message: "Registro deletado com sucesso" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro inesperado no servidor" });
    }
  }
};
