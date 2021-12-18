import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

import { UserRepository } from "../modules/user/repositories/implementations/UserRepository";
import { usersInfo } from "../routes/usersInfo.routes";

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
        throw new Error("Token missing!");
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
            throw new Error("User does not exists");
        }

        response.locals.email = email;
        next();
    } catch {
        throw new Error("Invalid Token!");
    }
}
