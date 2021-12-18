import { getRepository, Repository } from "typeorm";

import { ICreatePersonalInfoDTO } from "../../dtos/ICreatePersonalInfoDTO";
import { PersonalInfo } from "../../entities/PersonalInfo";
import { IPersonalInfoRepository } from "../IPersonalInfoRepository";

class PersonalInfoRepository implements IPersonalInfoRepository {
    private repository: Repository<PersonalInfo>;

    constructor() {
        this.repository = getRepository(PersonalInfo);
    }

    async create({
        cpf,
        birthdate,
        phone,
        address,
    }: ICreatePersonalInfoDTO): Promise<PersonalInfo> {
        const personalInfo = new PersonalInfo();
        Object.assign(personalInfo, {
            cpf,
            birthdate,
            phone,
            address,
        });

        await this.repository.save(personalInfo);
        return personalInfo;
    }

    async findByCpf(cpf: string): Promise<PersonalInfo> {
        const personalInfo = await this.repository.findOne({ cpf });
        return personalInfo;
    }
}

export { PersonalInfoRepository };
