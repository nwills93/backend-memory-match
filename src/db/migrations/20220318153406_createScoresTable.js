/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("scores", (table) => {
        table.increments("score_id").primary()
        table.string("difficulty_mode")
        table.integer("turns_taken")
        table.integer("time_taken")
        table.integer("user_id").unsigned().notNullable()
        table
            .foreign("user_id")
            .references("user_id")
            .inTable("users")
            .onDelete("cascade")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("scores")
};
