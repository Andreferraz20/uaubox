import { v4 as uuidV4 } from "uuid";

class PersonalInfo {
    id?: string;
    cpf: string;
    birthdate: string;
    phone: string;
    address: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.created_at = new Date();
            this.updated_at = new Date();
        }
    }
}

export { PersonalInfo };
