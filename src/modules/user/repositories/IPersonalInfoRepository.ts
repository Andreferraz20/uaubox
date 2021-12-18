import { ICreatePersonalInfoDTO } from "../dtos/ICreatePersonalInfoDTO";
import { PersonalInfo } from "../entities/PersonalInfo";

interface IPersonalInfoRepository {
    create({
        cpf,
        birthdate,
        phone,
        address,
    }: ICreatePersonalInfoDTO): Promise<PersonalInfo>;
    findByCpf(cpf: string): Promise<PersonalInfo>;
}

export { IPersonalInfoRepository, ICreatePersonalInfoDTO };
