import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
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

    @CreateDateColumn()
    deleted_at?: Date;

    @Column({ nullable: true })
    is_deleted?: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { PersonalInfo };
