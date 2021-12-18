import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import { PersonalInfo } from "../../entities/PersonalInfo";
import { CreateUserInfoUseCase } from "./CreatePersonalInfoUseCase";

class CreateUserInfoController {
    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<void> {
        const { cpf, birthdate, phone, address } = request.body;

        const createUserUseCase = container.resolve(CreateUserInfoUseCase);

        const personalInfo: PersonalInfo = await createUserUseCase.execute({
            cpf,
            birthdate,
            phone,
            address,
        });

        response.locals.id = personalInfo.id;
        next();
    }
}

export { CreateUserInfoController };
