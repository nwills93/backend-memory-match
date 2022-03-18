const users = require("../test-data/usersData")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    return knex
        .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
        .then(function () {
          return knex("users").insert(users)
        })
};