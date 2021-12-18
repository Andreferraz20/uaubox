import { Router } from "express";

import { CheckIfUserAlreadyExistsController } from "../modules/user/useCases/CheckIfUserAlreadyExists/CheckIfUserAlreadyExistsController";
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";
import { CreateUserInfoController } from "../modules/user/useCases/createUserInfo/CreatePersonalInfoController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const createUserInfoController = new CreateUserInfoController();
const checkIfUserAlreadyExistsController =
    new CheckIfUserAlreadyExistsController();

userRoutes.post(
    "/signup",
    checkIfUserAlreadyExistsController.handle,
    createUserInfoController.handle,
    createUserController.handle
);

export { userRoutes };
