import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { userRoutes } from "./userRoutes/user.routes";
import { usersInfo } from "./userRoutes/usersInfo.routes";

const router = Router();

router.use(userRoutes);
router.use(authenticateRoutes);
router.use(usersInfo);

export { router };
