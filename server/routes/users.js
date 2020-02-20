const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const imageup = require('../middlewares/imageupload')

router.get('/', UserController.getUsers)

router.post('/', UserController.register)

router.get('/:userId', UserController.getUser)

router.patch('/:userId', imageup.upload.single('imageUrl'), imageup.sendToCloudinary, UserController.updateUser)

router.delete('/:userId', UserController.deleteUser)

router.post('/signin', UserController.signin)

module.exports = router