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
    findById(id: string): Promise<PersonalInfo>;
    softDelete(id: string): Promise<void>;
}

export { IPersonalInfoRepository, ICreatePersonalInfoDTO };
