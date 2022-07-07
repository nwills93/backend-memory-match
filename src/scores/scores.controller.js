const service = require("./scores.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

const validProperties = [
    'username',
    'difficulty_mode',
    'turns_taken',
    'time_taken'
]

function hasValidProperties(req, res, next) {
    const { data = {} } = req.body

    const invalidProperties = Object.keys(data).filter(
        (property) => !validProperties.includes(property)
    )

    if (invalidProperties.length) {
        return next({
            status: 400,
            message: `Invalid field(s): ${invalidProperties.join(", ")}`
        })
    }
    return next()
}

function timeTakenIsValid(req, res, next) {
    let {time_taken} = req.body.data
    time_taken = Number(time_taken)
    if(!Number.isInteger(time_taken)) {
        return next({
            status: 400,
            message: 'time_taken must be a number'
        })
    }
    return next()
}

function turnsTakenIsValid(req, res, next) {
    let {turns_taken} = req.body.data
    turns_taken = Number(turns_taken)
    if(!Number.isInteger(turns_taken)) {
        return next({
            status: 400,
            message: 'turns_taken must be a number'
        })
    }
    return next()
}

function gameDifficultyIsValid(req, res, next) {
    const {difficulty_mode} = req.body.data
    const validDifficulties = ['easy', 'medium', 'hard']
    if(!validDifficulties.includes(difficulty_mode)) {
        return next({
            status:400,
            message: `Difficulty mode '${difficulty_mode}' is invalid. Please select either 'easy', 'medium', or 'hard'`
        })
    }
    return next()
}

async function listAllScores(req, res, next) {
    const data = await service.listAllScores()
    res.json({ data })
}


async function createNewScore(req, res, next) {
    const data = await service.createNewScore(req.body.data)
    res.status(201).json({ data })
}

module.exports = {
    listAllScores: asyncErrorBoundary(listAllScores),
    listAllUsersScoresEasy: asyncErrorBoundary(listAllUsersScoresEasy),
    createNewScore: [hasValidProperties, timeTakenIsValid, turnsTakenIsValid, gameDifficultyIsValid, asyncErrorBoundary(createNewScore)]
}