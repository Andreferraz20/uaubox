import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSubscription1639870505575 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "subscription",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "edition",
                        type: "varchar",
                    },
                    {
                        name: "status",
                        type: "enum",
                        enum: ["ACTIVE", "CANCELED"],
                    },
                    {
                        name: "type",
                        type: "enum",
                        enum: ["montlhy", "quarterly", "biannual", "annual"],
                    },
                    {
                        name: "cancel_reason",
                        type: "enum",
                        enum: [
                            "financial_problems",
                            "not_interested",
                            "not_matching_profile",
                            "other",
                        ],
                        isNullable: true,
                        default: null,
                    },
                    {
                        name: "user_info_id",
                        type: "uuid",
                        isNullable: false,
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
                ],
                foreignKeys: [
                    {
                        name: "FKUserInfo",
                        referencedTableName: "user_info",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_info_id"],
                        onDelete: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subscription");
    }
}
