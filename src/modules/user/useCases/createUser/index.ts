/* import { PersonalInfoRepository } from "../../repositories/implementations/PersonalInfoRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUSerUseCase } from "./CreateUserUseCase";

const userRepository = UserRepository.getInstance();
const personalInfoRepository = PersonalInfoRepository.getInstance();

const createUserUseCase = new CreateUSerUseCase(
    userRepository,
    personalInfoRepository
);

const createUserController = new CreateUserController(
    createUserUseCase,
    userRepository,
    personalInfoRepository
);

export { createUserController }; */
