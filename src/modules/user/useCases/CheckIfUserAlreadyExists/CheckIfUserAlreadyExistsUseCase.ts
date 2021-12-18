import { inject, injectable } from "tsyringe";

import { PersonalInfo } from "../../entities/PersonalInfo";
import { User } from "../../entities/User";
import { IPersonalInfoRepository } from "../../repositories/IPersonalInfoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    cpf: string;
}

@injectable()
class CheckIfUserAlreadyExistsUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("PersonalInfoRepository")
        private personalInfoRepository: IPersonalInfoRepository
    ) {}
    async execute({ email, cpf }: IRequest): Promise<void> {
        const userEmailAlreadyExists: User =
            await this.userRepository.findByEmail(email);

        if (userEmailAlreadyExists) {
            throw new Error("Email already exists");
        }

        const userCpfAlreadyExists: PersonalInfo =
            await this.personalInfoRepository.findByCpf(cpf);

        if (userCpfAlreadyExists) {
            throw new Error("CPF already exists");
        }
    }
}

export { CheckIfUserAlreadyExistsUseCase };
