import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { PersonalInfo } from "../../user/entities/PersonalInfo";

export enum SUBSCRIPTION_STATUS {
    ACTIVE,
    CANCELED,
}

export enum SUBSCRIPTION_TYPES {
    montlhy,
    quarterly,
    biannual,
    annual,
}

export enum CANCEL_TYPES {
    financial_problems,
    not_interested,
    not_matching_profile,
    other,
}

@Entity("subscription")
class Subscription {
    @PrimaryColumn()
    id?: string;

    edition: string;

    @Column({
        type: "enum",
        enum: SUBSCRIPTION_STATUS,
        default: SUBSCRIPTION_STATUS.ACTIVE,
    })
    status: SUBSCRIPTION_STATUS;

    @Column({
        type: "enum",
        enum: SUBSCRIPTION_TYPES,
    })
    type: SUBSCRIPTION_TYPES;

    @Column({
        type: "enum",
        enum: CANCEL_TYPES,
    })
    cancel_reason: CANCEL_TYPES;

    @ManyToOne(() => PersonalInfo)
    @JoinColumn({ name: "user_info_id" })
    personalInfo: PersonalInfo;

    @Column({ name: "user_info_id", nullable: true })
    id_info: string;

    @CreateDateColumn()
    created_at?: Date;

    @CreateDateColumn()
    updated_at?: Date;

    @DeleteDateColumn()
    deleted_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Subscription };
