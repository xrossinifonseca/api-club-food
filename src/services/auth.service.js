import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const loginService = (email) =>
  User.findOne({
    where: {
      email: email,
    },
  });

export const generationToken = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 604800 });
