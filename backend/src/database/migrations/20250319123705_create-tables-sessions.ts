import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("tables_sessions", (table)=>{
        table.increments("id").primary(),
        table.integer("table_id").notNullable().references("id").inTable("tables"),
        table.integer("opened_at").defaultTo(knex.fn.now()),
        table.integer("closed_at").nullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("tables_sessions")
}

