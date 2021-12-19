import { ICreateSubscriptionDTO } from "../dtos/ICreateSubscriptionDTO";
import { CANCEL_TYPES, Subscription } from "../entities/Subscription";

interface ISubscriptionRepository {
    create({ type: SUBSCRIPTION_TYPES }: ICreateSubscriptionDTO): Promise<void>;
    listAll(user_info_id: string): Promise<Subscription[]>;
    findOne(id: string): Promise<Subscription>;
    cancel(id: string, cancel_reason: CANCEL_TYPES): Promise<void>;
}

export { ISubscriptionRepository };
