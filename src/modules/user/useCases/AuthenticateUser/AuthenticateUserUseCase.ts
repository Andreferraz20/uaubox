import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
    name: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}
    async execute({ email, password, name }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect!", 400);
        }

        const passwordMath = await compare(password, user.password);

        if (!passwordMath) {
            throw new AppError("Email or password incorrect!", 400);
        }

        const token = sign(
            { id: user.id, email, name },
            "3987c061554dfb559deeb7f6fe5734f4",
            {
                subject: user.id,
                expiresIn: "5h",
            }
        );

        const tokenReturn: IResponse = {
            token,
            user: {
                name,
                email,
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
