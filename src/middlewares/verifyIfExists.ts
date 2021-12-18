import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";
import { PersonalInfoRepository } from "../modules/user/repositories/implementations/PersonalInfoRepository";
import { UserRepository } from "../modules/user/repositories/implementations/UserRepository";

export async function verifyIfExists(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        const { cpf, email } = request.body;
        const usersRepository = new UserRepository();
        const personalInfoRepository = new PersonalInfoRepository();

        const personalExists = await personalInfoRepository.findByCpf(cpf);
        if (personalExists) {
            throw new AppError("CPF already exists", 400);
        }

        const userExists = await usersRepository.findByEmail(email);

        if (userExists) {
            throw new AppError("Email already exists", 400);
        }

        next();
    } catch (err) {
        throw new AppError(`${err.message}`, err.statusCode);
    }
}
