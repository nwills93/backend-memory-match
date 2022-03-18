const service = require("./scores.service")

async function listAllScores(req, res, next) {
    const data = await service.listAllScores()
    res.json({data})
}

async function listAllUsersScoresEasy(req, res, next) {
    const data = await service.listAllUsersScoresEasy()
    res.json({data})
}

module.exports = {
    listAllScores,
    listAllUsersScoresEasy,
}