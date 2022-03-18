const knex = require("../db/connection")

function listAllScores() {
    return knex("scores").select("*")
}

function listAllUsersScoresEasy() {
    return knex("scores")
        .join("users", "users.user_id", "scores.user_id")
        .select("users.user_name", "scores.turns_taken", "scores.time_taken")
        .where({"scores.difficulty_mode": "easy"})
        .orderBy("scores.time_taken", "asc")
}

module.exports = {
    listAllScores,
    listAllUsersScoresEasy,
}