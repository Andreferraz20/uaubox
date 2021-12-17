import { Router } from "express";

import { PersonalInfoRepository } from "../modules/user/repositories/implementations/PersonalInfoRepository";
import { CreatePersonal_InfoService } from "../modules/user/services/CreatePersonal_InfoService";

const personalInfoRoutes = Router();

const personalInfoRepository = new PersonalInfoRepository();

personalInfoRoutes.post("/", (request, response) => {
    const { cpf, birthdate, phone, address } = request.body;

    const createPersonalInfoService = new CreatePersonal_InfoService(
        personalInfoRepository
    );

    createPersonalInfoService.execute({ cpf, birthdate, phone, address });

    return response.status(201).send();
});

export { personalInfoRoutes };
