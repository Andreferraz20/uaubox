import { inject, injectable } from "tsyringe";

import { PersonalInfo } from "../../entities/PersonalInfo";
import { IPersonalInfoRepository } from "../../repositories/IPersonalInfoRepository";

interface IRequest {
    cpf: string;
    birthdate: string;
    phone: string;
    address: string;
}

@injectable()
class CreateUserInfoUseCase {
    constructor(
        @inject("PersonalInfoRepository")
        private personalInfoRepository: IPersonalInfoRepository
    ) {}

    async execute({
        cpf,
        birthdate,
        phone,
        address,
    }: IRequest): Promise<PersonalInfo> {
        const personalInfo: PersonalInfo =
            await this.personalInfoRepository.create({
                cpf,
                birthdate,
                phone,
                address,
            });
        return personalInfo;
    }
}

export { CreateUserInfoUseCase };
