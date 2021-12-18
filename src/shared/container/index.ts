import { container } from "tsyringe";

import { PersonalInfoRepository } from "../../modules/user/repositories/implementations/PersonalInfoRepository";
import { UserRepository } from "../../modules/user/repositories/implementations/UserRepository";
import { IPersonalInfoRepository } from "../../modules/user/repositories/IPersonalInfoRepository";
import { IUserRepository } from "../../modules/user/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IPersonalInfoRepository>(
    "PersonalInfoRepository",
    PersonalInfoRepository
);
