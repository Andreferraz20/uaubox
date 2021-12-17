import { PersonalInfo } from "../entities/PersonalInfo";

interface ICreatePersonalInfoDTO {
    cpf: string;
    birthdate: string;
    phone: string;
    address: string;
}

interface IPersonalInfoRepository {
    create({ cpf, birthdate, phone, address }: ICreatePersonalInfoDTO): void;
    findByCpf(cpf: string): PersonalInfo;
}

export { IPersonalInfoRepository, ICreatePersonalInfoDTO };
