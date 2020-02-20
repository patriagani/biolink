const Link = require('../models/Link')

class LinkController {

    static getLinks(req, res) {
        Link.find({username: req.params.username})
            .then(function(links) {
                res.status(200).json(links)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static createLink(req, res) {
        let obj = {
            user: req.user._id,
            username: req.user.username,
            name: req.body.name,
            link: req.body.link
        }

        Link.create(obj)
            .then(function(link) {
                res.status(200).json(link)
            })
            .catch(function(error){
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static getLink(req, res) {
        Link.findById(req.params.linkId)
            .then(function(link) {
                res.status(200).json(link)
            })
            .catch(function(error) {
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static updateLink(req, res) {
        Link.findOneAndUpdate({_id: req.params.linkId}, req.body, {new: true})
          .then(function(link) {
            res.status(200).json(link)
          })
          .catch(function(error) {
            res.status(500).json({
              message: "Internal Server Error",
              error: error
            })
          })
    }

    static deleteLink(req, res) {
        Link.deleteOne({_id: req.params.linkId})
            .then(function(status) {
                if (status.deletedCount == 0) {
                    throw new Error("Cannot find link id")
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

module.exports = LinkController