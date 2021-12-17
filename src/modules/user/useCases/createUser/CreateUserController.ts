import { Request, Response } from "express";

import { PersonalInfoRepository } from "../../repositories/implementations/PersonalInfoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUSerUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(
        private createUserUseCase: CreateUSerUseCase,
        private userRepository: IUserRepository,
        private personalInfoRepository: PersonalInfoRepository
    ) {}

    handle(request: Request, response: Response): Response {
        const { name, email, password, cpf, birthdate, phone, address } =
            request.body;

        const userAlreadyExists = this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("Email already exists!");
        }

        const PersonalInfoAlreadyExists =
            this.personalInfoRepository.findByCpf(cpf);

        if (PersonalInfoAlreadyExists) {
            throw new Error("CPF Already exists");
        }

        this.createUserUseCase.execute({
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
