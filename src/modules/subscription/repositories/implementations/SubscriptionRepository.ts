import { getRepository, Repository } from "typeorm";

import { ICreateSubscriptionDTO } from "../../dtos/ICreateSubscriptionDTO";
import { Subscription, CANCEL_TYPES } from "../../entities/Subscription";
import { ISubscriptionRepository } from "../ISubscriptionRepository";

class SubscriptionRepository implements ISubscriptionRepository {
    private repository: Repository<Subscription>;

    constructor() {
        this.repository = getRepository(Subscription);
    }

    create({
        type: SUBSCRIPTION_TYPES,
    }: ICreateSubscriptionDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async listAll(user_info_id: string): Promise<Subscription[]> {
        // inacabado
        return [];
    }
    findOne(id: string): Promise<Subscription> {
        throw new Error("Method not implemented.");
    }
    cancel(id: string, cancel_reason: CANCEL_TYPES): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { SubscriptionRepository };
