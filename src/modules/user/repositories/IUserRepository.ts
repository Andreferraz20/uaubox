import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    id_info: string;
}

interface IUserRepository {
    findByEmail(email: string): User;
    list(): User[];
    create({ name, email, password, id_info }: ICreateUserDTO): void;
}

export { IUserRepository, ICreateUserDTO };
