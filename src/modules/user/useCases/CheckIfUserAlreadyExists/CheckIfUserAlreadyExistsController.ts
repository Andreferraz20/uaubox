import { NextFunction, Request, Response } from "express";

import { CheckIfUserAlreadyExistsUseCase } from "./CheckIfUserAlreadyExistsUseCase";

class CheckIfUserAlreadyExistsController {
    async handle(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<void> {
        const { email, cpf } = request.body;

        const checkIfUserAlreadyExistsUseCase =
            new CheckIfUserAlreadyExistsUseCase();

        checkIfUserAlreadyExistsUseCase.execute({
            email,
            cpf,
        });

        next();
    }
}

export { CheckIfUserAlreadyExistsController };
