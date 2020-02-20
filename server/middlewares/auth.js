const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.header('x-auth-token')

    if(!token) {
        return res.status(401).json({
            message: 'Access denied. No token provided'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }
    catch (error) {
        res.status(400).json({
            message: "Invalid token",
            error: error.message
        })
    }
}

module.exports = auth