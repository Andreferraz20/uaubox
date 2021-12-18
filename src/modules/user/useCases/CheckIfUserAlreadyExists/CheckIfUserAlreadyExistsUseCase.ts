import { PersonalInfo } from "../../entities/PersonalInfo";
import { User } from "../../entities/User";
import { PersonalInfoRepository } from "../../repositories/implementations/PersonalInfoRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { IPersonalInfoRepository } from "../../repositories/IPersonalInfoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    cpf: string;
}

class CheckIfUserAlreadyExistsUseCase {
    async execute({ email, cpf }: IRequest): Promise<void> {
        const userRepository: IUserRepository = new UserRepository();

        const personalInfoRepository: IPersonalInfoRepository =
            new PersonalInfoRepository();

        console.log(email);
        const userEmailAlreadyExists: User = await userRepository.findByEmail(
            email
        );

        if (userEmailAlreadyExists) {
            throw new Error("Email already exists");
        }

        const userCpfAlreadyExists: PersonalInfo =
            await personalInfoRepository.findByCpf(cpf);

        if (userCpfAlreadyExists) {
            throw new Error("CPF already exists");
        }
    }
}

export { CheckIfUserAlreadyExistsUseCase };
