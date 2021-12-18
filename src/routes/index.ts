import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { personalInfoRoutes } from "./personalInfo.routes";
import { userRoutes } from "./user.routes";
import { usersInfo } from "./usersInfo.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/user_info", personalInfoRoutes);
router.use(authenticateRoutes);
router.use(usersInfo);

export { router };
