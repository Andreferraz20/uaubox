import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserInfoUseCase } from "./CreatePersonalInfoUseCase";

class CreateUserInfoController {
    handle(request: Request, response: Response, next: NextFunction): Response {
        const { cpf, birthdate, phone, address } = request.body;

        const createUserUseCase = container.resolve(CreateUserInfoUseCase);

        createUserUseCase.execute({
            cpf,
            birthdate,
            phone,
            address,
        });
        return response.status(201).send();
    }
}

export { CreateUserInfoController };
