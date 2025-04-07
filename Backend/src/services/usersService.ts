import bcrypt from "bcryptjs";
import { generateToken } from "../utils/tokenUtil";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const registerUser = async (
  email: string,
  password: string,
  company: string
): Promise<string> => {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    throw new Error("Usuário já cadastrado");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      company,
    },
  });

  return generateToken(newUser.email);
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    throw new Error("Usuário não encontrado");
  }
  if (user.password) {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Senha incorreta");
    }
  } else {
    throw new Error("Senha não informada");
  }

  return generateToken(user.email);
};
