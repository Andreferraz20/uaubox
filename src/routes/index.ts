import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { personalInfoRoutes } from "./personalInfo.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/user_info", personalInfoRoutes);
router.use(authenticateRoutes);

export { router };
