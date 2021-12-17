import { IPersonalInfoRepository } from "../repositories/IPersonalInfoRepository";

interface IRequest {
    cpf: string;
    birthdate: string;
    phone: string;
    address: string;
}

class CreatePersonal_InfoService {
    constructor(private personalInfoRepository: IPersonalInfoRepository) {}
    execute({ cpf, birthdate, phone, address }: IRequest): void {
        const personalInfoAlreadyExists =
            this.personalInfoRepository.findByCpf(cpf);

        if (personalInfoAlreadyExists) {
            throw new Error("Personal Info already exists!");
        }
        this.personalInfoRepository.create({
            cpf,
            birthdate,
            phone,
            address,
        });
    }
}

export { CreatePersonal_InfoService };
