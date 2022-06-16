const service = require("./scores.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function listAllScores(req, res, next) {
    const data = await service.listAllScores()
    res.json({ data })
}

async function listAllUsersScoresEasy(req, res, next) {
    const data = await service.listAllUsersScoresEasy()
    res.json({ data })
}

async function createNewScore(req, res, next) {
    const data = await service.createNewScore(req.body.data)
    res.status(201).json({ data })
}

module.exports = {
    listAllScores: asyncErrorBoundary(listAllScores),
    listAllUsersScoresEasy: asyncErrorBoundary(listAllUsersScoresEasy),
    createNewScore: asyncErrorBoundary(createNewScore)
}