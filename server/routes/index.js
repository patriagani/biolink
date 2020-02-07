const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.status(200).json({port: 3000, status: 'connected'})
})

module.exports = router