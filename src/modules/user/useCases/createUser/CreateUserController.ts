import { Request, Response } from "express";
import { container } from "tsyringe";

import { PersonalInfoRepository } from "../../repositories/implementations/PersonalInfoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUSerUseCase } from "./CreateUserUseCase";

class CreateUserController {
    handle(request: Request, response: Response): Response {
        const { name, email, password, cpf, birthdate, phone, address } =
            request.body;

        const createUserUseCase = container.resolve(CreateUSerUseCase);

        createUserUseCase.execute({
            name,
            email,
            password,
            cpf,
            birthdate,
            phone,
            address,
        });

        return response.status(201).send();
    }
}

export { CreateUserController };
