const knex = require("../db/connection")

function listAllScores() {
    return knex("scores").select("*")
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