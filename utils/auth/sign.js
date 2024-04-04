import { compare, hash } from "bcryptjs";

const { sign, verify } = require("jsonwebtoken");

const hashPassword = async (password) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const generateToken = (data) => {
  const token = sign({ ...data }, process.env.privateKey, {
    expiresIn: "24h",
  });

  return token;
};

const verifyToken = (token) => {
  try {
    const validationToken = verify(token, process.env.privateKey);
    return validationToken;
  } catch (error) {
    return false;
  }
};

const verifyPassword = async (password, hashPassword) => {
  const isValid = await compare(password, hashPassword);
  return isValid;
};

export { generateToken, verifyToken, hashPassword, verifyPassword };
