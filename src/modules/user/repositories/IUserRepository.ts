import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    create({ name, email, password, id_info }: ICreateUserDTO): Promise<void>;
    softDelete(id: string): Promise<void>;
}

export { IUserRepository, ICreateUserDTO };
