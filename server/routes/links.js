const express = require('express')
const router = express.Router()
const LinkController = require('../controllers/LinkController')
const auth = require('../middlewares/auth')

router.post('/', auth, LinkController.createLink)

router.get('/:linkId', LinkController.getLink)

router.patch('/:linkId', LinkController.updateLink)

router.delete('/:linkId', auth, LinkController.deleteLink)

router.get('/createdby/:username', LinkController.getLinks)

module.exports = router