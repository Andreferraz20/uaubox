import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserInfo1639776234009 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_info",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "birthdate",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                    },
                    {
                        name: "address",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "is_deleted",
                        type: "boolean",
                        default: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_info");
    }
}
