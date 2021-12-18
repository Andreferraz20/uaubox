import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ReturningUserInfoController } from "../modules/user/useCases/ReturningUserInfo/ReturningUserInfoController";

const usersInfo = Router();

const returningUserinfoController = new ReturningUserInfoController();

usersInfo.use(ensureAuthenticated);
usersInfo.get("/me", returningUserinfoController.handle);

export { usersInfo };
