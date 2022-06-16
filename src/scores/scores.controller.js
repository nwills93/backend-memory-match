const service = require("./scores.service")

async function listAllScores(req, res, next) {
    const data = await service.listAllScores()
    res.json({data})
}

async function listAllUsersScoresEasy(req, res, next) {
    const data = await service.listAllUsersScoresEasy()
    res.json({data})
}

async function createNewScore(req, res, next) {
    
}

module.exports = {
    listAllScores,
    listAllUsersScoresEasy,
}