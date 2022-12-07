import { Router } from "express";
import userController from "../controllers/user.controllers.js";
const routes = Router();

routes.post("/", userController.createUser);
routes.get("/", userController.findAll);
routes.get("/:id", userController.findClientBypK);

export default routes;
