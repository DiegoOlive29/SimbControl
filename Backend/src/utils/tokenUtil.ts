import jwt from "jsonwebtoken";

const SECRET_KEY = "minha_chave_secreta";

export const generateToken = (email: string): string => {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
};
