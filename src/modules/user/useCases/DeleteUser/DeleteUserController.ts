import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
    async handle(request: Request, response: Response): Promise<void> {
        const { email } = response.locals;

        const createUserUseCase = container.resolve(DeleteUserUseCase);

        await createUserUseCase.execute({
            email,
        });

        response.status(200).json({ message: "Deleted" });
    }
}

export { DeleteUserController };
