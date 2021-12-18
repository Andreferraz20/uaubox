import { Router } from "express";

import { AuthenticateUserController } from "../modules/user/useCases/AuthenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/signin", authenticateUserController.handle);

export { authenticateRoutes };
