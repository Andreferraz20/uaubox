import { NextFunction, Request, Response, Router } from "express";

import { verifyIfExists } from "../middlewares/verifyIfExists";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";
import { CreateUserInfoController } from "../modules/user/useCases/createUserInfo/CreatePersonalInfoController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const createUserInfoController = new CreateUserInfoController();

userRoutes.post(
    "/signup",
    verifyIfExists,
    createUserInfoController.handle,
    createUserController.handle
);

export { userRoutes };
