import { inject, injectable } from "tsyringe";

import { IPersonalInfoRepository } from "../../repositories/IPersonalInfoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
}

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("PersonalInfoRepository")
        private personalInfoRepository: IPersonalInfoRepository,
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ email }: IRequest): Promise<void> {
        const { id, id_info } = await this.userRepository.findByEmail(email);
        await this.personalInfoRepository.softDelete(id_info);
        await this.userRepository.softDelete(id);
    }
}

export { DeleteUserUseCase };
