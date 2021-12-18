import { Router } from "express";

import { CreateUserInfoController } from "../modules/user/useCases/createUserInfo/CreatePersonalInfoController";

const personalInfoRoutes = Router();

const createUserInfoController = new CreateUserInfoController();

personalInfoRoutes.post("/", createUserInfoController.handle);

export { personalInfoRoutes };
