import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
    id_info: string;
}

@injectable()
class CreateUSerUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ name, email, password, id_info }: IRequest): Promise<void> {
        const passwordHash = await hash(password, 8);
        this.userRepository.create({
            name,
            email,
            password: passwordHash,
            id_info,
        });
    }
}

export { CreateUSerUseCase };
