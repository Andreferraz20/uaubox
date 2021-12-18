import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/user/repositories/implementations/UserRepository";

interface IPayload {
    sub: string;
    email: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing!", 401);
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub: id, email } = verify(
            token,
            "3987c061554dfb559deeb7f6fe5734f4"
        ) as IPayload;

        const usersRepository = new UserRepository();
        const user = usersRepository.findById(id);

        if (!user) {
            throw new AppError("Invalid Token", 401);
        }

        response.locals.email = email;
        next();
    } catch {
        throw new AppError("Invalid Token!", 401);
    }
}
