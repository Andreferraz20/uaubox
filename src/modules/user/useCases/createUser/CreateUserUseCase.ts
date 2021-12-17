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

class CreateUSerUseCase {
    constructor(
        private userRepository: IUserRepository,
        private personalInfoRepository: IPersonalInfoRepository
    ) {}

    execute({
        name,
        email,
        password,
        cpf,
        birthdate,
        phone,
        address,
    }: IRequest): void {
        this.personalInfoRepository.create({ cpf, birthdate, phone, address });
        const personalInfo = this.personalInfoRepository.findByCpf(cpf);

        this.userRepository.create({
            name,
            email,
            password,
            id_info: personalInfo.id,
        });
    }
}

export { CreateUSerUseCase };
