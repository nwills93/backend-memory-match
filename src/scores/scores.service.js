const knex = require("../db/connection")

function listAllScores() {
    return knex("scores").select("*")
}

function listAllUsersScoresEasy() {
    return knex("scores")
        .select("username", "turns_taken", "time_taken")
        .where({"difficulty_mode": "easy"})
        .orderBy("time_taken", "asc")
}

function createNewScore(score) {
    return knex("scores")
        .insert(score)
        .returning("*")
        .then(createdScore => createdScore[0])
}

module.exports = {
    listAllScores,
    listAllUsersScoresEasy,
    createNewScore
}