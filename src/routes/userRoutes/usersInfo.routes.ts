import { Router } from "express";

import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";
import { ReturningUserInfoController } from "../../modules/user/useCases/ReturningUserInfo/ReturningUserInfoController";

const usersInfo = Router();

const returningUserinfoController = new ReturningUserInfoController();

usersInfo.get("/me", ensureAuthenticated, returningUserinfoController.handle);

export { usersInfo };
