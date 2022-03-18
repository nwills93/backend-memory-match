const scores = require("../test-data/scoresData")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    return knex
        .raw("TRUNCATE TABLE scores RESTART IDENTITY CASCADE")
        .then(function ()  {
          return knex("scores").insert(scores)
        })
};
