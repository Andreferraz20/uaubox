import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import { CheckIfUserAlreadyExistsUseCase } from "./CheckIfUserAlreadyExistsUseCase";

class CheckIfUserAlreadyExistsController {
    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<void> {
        const { email, cpf } = request.body;

        const checkIfUserAlreadyExistsUseCase = container.resolve(
            CheckIfUserAlreadyExistsUseCase
        );

        checkIfUserAlreadyExistsUseCase.execute({
            email,
            cpf,
        });

        next();
    }
}

export { CheckIfUserAlreadyExistsController };
