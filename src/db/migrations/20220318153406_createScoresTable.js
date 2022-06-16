/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("scores", (table) => {
        table.increments("score_id").primary()
        table.string("username").notNullable()
        table.string("difficulty_mode").notNullable()
        table.integer("turns_taken").notNullable()
        table.integer("time_taken").notNullable()
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("scores")
};
