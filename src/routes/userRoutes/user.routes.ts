import { Router } from "express";

import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { verifyIfExists } from "../../middlewares/verifyIfExists";
import { CreateUserController } from "../../modules/user/useCases/createUser/CreateUserController";
import { CreateUserInfoController } from "../../modules/user/useCases/createUserInfo/CreatePersonalInfoController";
import { DeleteUserController } from "../../modules/user/useCases/DeleteUser/DeleteUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const createUserInfoController = new CreateUserInfoController();
const deleteUserController = new DeleteUserController();

userRoutes.post(
    "/signup",
    verifyIfExists,
    createUserInfoController.handle,
    createUserController.handle
);

userRoutes.delete("/me", ensureAuthenticated, deleteUserController.handle);

export { userRoutes };
