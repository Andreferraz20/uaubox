import { Router } from "express";

import { createUserController } from "../modules/user/useCases/createUser";
import { listUsersController } from "../modules/user/useCases/listUsers";

const userRoutes = Router();

userRoutes.post("/signup", (request, response) =>
    createUserController.handle(request, response)
);

userRoutes.get("/", (request, response) =>
    listUsersController.handle(request, response)
);

export { userRoutes };
