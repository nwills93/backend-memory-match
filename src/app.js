const express = require("express")
const cors = require("cors")
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")
const scoresRouter = require("./scores/scores.router")
const app = express()

app.use(express.json())
app.use(cors())

app.use("/scores", scoresRouter)

app.use(notFound)
app.use(errorHandler)

module.exports = app