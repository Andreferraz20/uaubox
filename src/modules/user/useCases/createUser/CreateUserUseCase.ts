import { inject, injectable } from "tsyringe";

import { IPersonalInfoRepository } from "../../repositories/IPersonalInfoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    email: string;
    password: string;
    cpf: string;
    birthdate: string;
    phone: string;
    address: string;
}

@injectable()
class CreateUSerUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("PersonalInfoRepository")
        private personalInfoRepository: IPersonalInfoRepository
    ) {}

    execute({ name, email, password }: IRequest): void {
        // const personalInfo = this.personalInfoRepository.findByCpf(cpf);

        this.userRepository.create({
            name,
            email,
            password,
            id_info: "1234",
        });
    }
}

export { CreateUSerUseCase };
