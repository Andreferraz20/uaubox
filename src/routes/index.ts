import { Router } from "express";

import { personalInfoRoutes } from "./personalInfo.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/user_info", personalInfoRoutes);

export { router };
