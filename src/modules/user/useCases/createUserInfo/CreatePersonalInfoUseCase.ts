import { inject, injectable } from "tsyringe";

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

    async execute({ cpf, birthdate, phone, address }: IRequest): Promise<void> {
        this.personalInfoRepository.create({ cpf, birthdate, phone, address });
    }
}

export { CreateUserInfoUseCase };
