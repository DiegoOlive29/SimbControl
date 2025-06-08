import { Request, Response } from "express";
import {
  createDelivery,
  getAllDeliveries,
  getDeliveryById,
  deleteDelivery,
} from "../services/deliveryService";

export const postDeliveryController = async (req: Request, res: Response) => {
  try {
    const newDelivery = await createDelivery(req.body);
    res
      .status(201)
      .json({ message: "Entrega registrada com sucesso", newDelivery });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getAllDeliveriesController = async (
  _req: Request,
  res: Response
) => {
  const deliveries = await getAllDeliveries();
  res.json(deliveries);
};

export const getDeliveryByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const delivery = await getDeliveryById(id);
  delivery
    ? res.json(delivery)
    : res.status(404).json({ error: "Entrega não encontrada" });
};

export const deleteDeliveryController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteDelivery(id);
  res.json({ message: "Entrega excluída com sucesso" });
};
