import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUSerUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        const { id } = response.locals;
        const createUserUseCase = container.resolve(CreateUSerUseCase);

        createUserUseCase.execute({
            name,
            email,
            password,
            id_info: id,
        });

        return response.status(201).send();
    }
}

export { CreateUserController };
