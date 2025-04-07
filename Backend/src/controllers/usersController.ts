import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/usersService";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, company } = req.body;
    const token = await registerUser(email, password, company);
    res.status(201).json({ message: "Usuário cadastrado com sucesso", token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro inesperado no servidor" });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.json({ message: "Login realizado com sucesso", token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro inesperado no servidor" });
    }
  }
};
