import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class createusertable1625478675529 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: "awesome",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "chat_id",
            type: "integer",
            isUnique: true,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "active",
            type: "boolean",
            default: true,
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
        ],
      })
    );
    await queryRunner.createIndex(
      "awesome",
      new TableIndex({
        name: "IDX_AWESOME_CHAT_ID",
        columnNames: ["chat_id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex("awesome", "IDX_AWESOME_CHAT_ID");
    // await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    await queryRunner.dropTable("awesome");
  }
}
