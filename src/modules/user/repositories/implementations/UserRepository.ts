import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        email,
        password,
        id_info,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
            id_info,
        });

        await this.repository.save(user);
    }

    /* list(): User[] {
        // return this.repo;
    }

    findByEmail(email: string): User {
        const user = this.user.find((user) => user.email === email);

        return user;
    } */
}

export { UserRepository };
