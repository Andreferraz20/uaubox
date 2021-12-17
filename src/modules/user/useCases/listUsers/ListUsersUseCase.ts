import { IPersonalInfoRepository } from "../../repositories/IPersonalInfoRepository";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListUsersUseCase {
    constructor(
        private userRepository: IUserRepository,
        private personalInfoRepository: IPersonalInfoRepository
    ) {}

    execute(): unknown[] {
        const users = [
            this.userRepository.list(),
            this.personalInfoRepository.findByCpf("17218469789"),
        ];

        return users;
    }
}

export { ListUsersUseCase };
