import { Request, Response } from "express";
import { container } from "tsyringe";

import { ReturningUserInfoUseCase } from "./ReturningUserInfoUseCase";

class ReturningUserInfoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = response.locals;

        const returningUserInfoUseCase = container.resolve(
            ReturningUserInfoUseCase
        );

        const user = await returningUserInfoUseCase.execute({
            email,
        });

        return response.status(200).json(user);
    }
}

export { ReturningUserInfoController };
