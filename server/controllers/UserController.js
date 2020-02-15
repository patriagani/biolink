const User = require('../models/User')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(Number(process.env.SALT))
const jwt = require('jsonwebtoken')

class UserController {
    static register(req, res) {
        let password = bcrypt.hashSync(req.body.password, salt)
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
        if(req.body.password) {
          req.body.password = bcrypt.hashSync(req.body.password, salt)
        }
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

    static signin(req, res) {
        User.findOne({email: req.body.email})
          .then(function (user) {
            if (user && bcrypt.compareSync(req.body.password, user.password)) {
              let payload = {
                _id: user._id,
                username: user.username,
                name: user.name,
                email: user.email
              }
    
              let token = jwt.sign(payload, process.env.JWT_SECRET);
              res.header('x-auth-token', token).status(200).json({
                id: payload._id,
                username: payload.username,
                signin: true
              })
            }
            else {
              res.status(401).json({
                message: "Wrong email/password",
              })
            }
          })
          .catch(function(error) {
            console.log(error.message);
            res.status(500).json({
              message: "Internal server error",
              error: error.message
            })
          })
      }
}

module.exports = UserController