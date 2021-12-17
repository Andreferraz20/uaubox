import { User } from "../../model/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private user: User[];

    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: UserRepository;

    constructor() {
        this.user = [];
    }

    public static getInstance(): UserRepository {
        if (!UserRepository.INSTANCE) {
            UserRepository.INSTANCE = new UserRepository();
        }
        return UserRepository.INSTANCE;
    }

    create({ name, email, password, id_info }: ICreateUserDTO): void {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            password,
            id_info,
        });

        this.user.push(user);
    }

    list(): User[] {
        return this.user;
    }

    findByEmail(email: string): User {
        const user = this.user.find((user) => user.email === email);

        return user;
    }
}

export { UserRepository };
