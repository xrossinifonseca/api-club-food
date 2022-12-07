import bcrypt from "bcrypt";
import { loginService, generationToken } from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginService(email);
    if (!user) {
      return res.status(404).send({ message: "user or Password not Found" });
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(400).send({ message: "email or password not found" });
    }

    const token = generationToken(user.id);

    res.send({ user, token });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
