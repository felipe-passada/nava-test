import HttpStatusCodes from "../constants/httpStatusCode.const";
import { RouteError } from "../handlers/route.handler";
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET:string = process.env.JWT_SECRET || "";
const JWT_EXP:string = process.env.JWT_EXP || ""
const USER = {
  email: process.env.email,
  password: process.env.password
}

function login (email:string, password: string) {
  const isValidUser = email === USER.email;
  const isValidPassword = password === USER.password;

  if (!isValidUser) throw new RouteError(HttpStatusCodes.UNAUTHORIZED, "user or password incorrect!");
  if (!isValidPassword) throw new RouteError(HttpStatusCodes.UNAUTHORIZED, "user or password incorrect!");

  const token = jsonwebtoken.sign(
    { user: JSON.stringify(USER) },
    JWT_SECRET,
    { expiresIn: JWT_EXP }
  )

  return token;
}

export default {
  login
} as const;
