const router = require("express").Router()
const controller = require("./scores.controller")

router.route("/easy").get(controller.listAllUsersScoresEasy)
router.route("/").get(controller.listAllScores)

module.exports = router