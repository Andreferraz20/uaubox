import { PersonalInfo } from "../../entities/PersonalInfo";
import {
    IPersonalInfoRepository,
    ICreatePersonalInfoDTO,
} from "../IPersonalInfoRepository";

class PersonalInfoRepository implements IPersonalInfoRepository {
    private personalInfo: PersonalInfo[];

    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: PersonalInfoRepository;

    constructor() {
        this.personalInfo = [];
    }

    public static getInstance(): PersonalInfoRepository {
        if (!PersonalInfoRepository.INSTANCE) {
            PersonalInfoRepository.INSTANCE = new PersonalInfoRepository();
        }
        return PersonalInfoRepository.INSTANCE;
    }

    create({
        cpf,
        birthdate,
        phone,
        address,
    }: ICreatePersonalInfoDTO): PersonalInfo {
        const personalInfo = new PersonalInfo();
        Object.assign(personalInfo, {
            cpf,
            birthdate,
            phone,
            address,
        });

        this.personalInfo.push(personalInfo);
        console.log(personalInfo.id);
        return personalInfo;
    }

    findByCpf(cpf: string): PersonalInfo {
        const personalInfo = this.personalInfo.find(
            (personalInfo) => personalInfo.cpf === cpf
        );
        return personalInfo;
    }
}

export { PersonalInfoRepository };
