import { container } from "tsyringe";

import { SubscriptionRepository } from "../../modules/subscription/repositories/implementations/SubscriptionRepository";
import { ISubscriptionRepository } from "../../modules/subscription/repositories/ISubscriptionRepository";
import { PersonalInfoRepository } from "../../modules/user/repositories/implementations/PersonalInfoRepository";
import { UserRepository } from "../../modules/user/repositories/implementations/UserRepository";
import { IPersonalInfoRepository } from "../../modules/user/repositories/IPersonalInfoRepository";
import { IUserRepository } from "../../modules/user/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IPersonalInfoRepository>(
    "PersonalInfoRepository",
    PersonalInfoRepository
);

container.registerSingleton<ISubscriptionRepository>(
    "SubscriptionRepository",
    SubscriptionRepository
);
