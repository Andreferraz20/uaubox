import { inject, injectable } from "tsyringe";

import { PersonalInfo } from "../../entities/PersonalInfo";
import { User } from "../../entities/User";
import { IPersonalInfoRepository } from "../../repositories/IPersonalInfoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
}

interface IResponse {
    name: string;
    email: string;
    cpf: string;
    birthdate: string;
    phone: string;
    address: string;
}

@injectable()
class ReturningUserInfoUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("PersonalInfoRepository")
        private personalInfoRepository: IPersonalInfoRepository
    ) {}
    async execute({ email }: IRequest): Promise<IResponse> {
        const user: User = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("User not found!");
        }

        const { id_info } = user;

        const personalInfo: PersonalInfo =
            await this.personalInfoRepository.findById(id_info);

        if (!personalInfo) {
            throw new Error("User not found!");
        }

        const returningUser: IResponse = {
            name: user.name,
            email: user.email,
            cpf: personalInfo.cpf,
            birthdate: personalInfo.birthdate,
            phone: personalInfo.phone,
            address: personalInfo.address,
        };
        return returningUser;
    }
}

export { ReturningUserInfoUseCase };
