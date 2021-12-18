import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { userRoutes } from "./user.routes";
import { usersInfo } from "./usersInfo.routes";

const router = Router();

router.use("/user", userRoutes);
router.use(authenticateRoutes);
router.use(usersInfo);

export { router };
