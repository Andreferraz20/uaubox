import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity({ name: "user_info" })
class PersonalInfo {
    @PrimaryColumn()
    id?: string;

    @Column()
    cpf: string;

    @Column()
    birthdate: string;

    @Column()
    phone: string;

    @Column()
    address: string;

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

export { PersonalInfo };
