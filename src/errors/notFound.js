function notFound(req, res, next) {
    next({
        status: 404,
        message: "URL not found"
    })
}

module.exports = notFound