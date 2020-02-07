const User = require('../models/User')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(Number(process.env.SALT))
const jwt = require('jsonwebtoken')

class UserController {
    static register(req, res) {
        let password = bcrypt.hashSync(req.body.password, salt);
        let obj = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: password
        }

        User.create(obj)
            .then(function(user) {
                res.status(200).json(user)
            })
            .catch(function(error){
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static getUsers(req, res) {
        User.find()
            .then(function(users) {
                res.status(200).json(users)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static getUser(req, res) {
        User.findById(req.params.userId)
            .then(function(user) {
                res.status(200).json(user)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static updateUser(req, res) {
        User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true})
          .then(function(user) {
            res.status(200).json(user)
          })
          .catch(function(error) {
            res.status(500).json({
              message: "Internal Server Error",
              error: error
            })
          })
    }

    static deleteUser(req, res) {
        User.deleteOne({_id: req.params.userId})
            .then(function(status) {
                if (status.deletedCount == 0) {
                    throw new Error("Cannot find user id")
                }
                res.status(200).json(status)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }
}

module.exports = UserController