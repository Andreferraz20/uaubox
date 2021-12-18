import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { PersonalInfo } from "./PersonalInfo";

@Entity("user")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => PersonalInfo)
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

export { User };
