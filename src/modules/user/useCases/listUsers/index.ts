import { PersonalInfoRepository } from "../../repositories/implementations/PersonalInfoRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const usersRepository = UserRepository.getInstance();
const personalInfoRepository = PersonalInfoRepository.getInstance();

const listUsersUseCase = new ListUsersUseCase(
    usersRepository,
    personalInfoRepository
);

const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };
