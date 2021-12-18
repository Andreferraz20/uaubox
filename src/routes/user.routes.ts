import { Router } from "express";

import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController";
// import { listUsersController } from "../modules/user/useCases/listUsers";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/signup", createUserController.handle);

/* userRoutes.get("/", (request, response) =>
    listUsersController.handle(request, response)
); */

export { userRoutes };
