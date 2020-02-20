const multer = require('multer')
const cloudinary = require('cloudinary')

//Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_ID,
    api_secret: process.env.API_SECRET
  })

//Multer
const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
        cb(new Error('File is not supported'), false)
        return
      }
  
      cb(null, true)
    }, limits : {
      fileSize: 1024 * 1024 * 5
    }
  })

function sendToCloudinary(req, res, next) {
  
    if(!req.file) {
        return next()
    }

    cloudinary.v2.uploader.upload(req.file.path)
        .then(function(result) {
          req.body.imageUrl = result.secure_url
          next()
        })
        .catch(function(error) {
          res.status(500).json({
            message: "Internal Server Error",
            error: error
          })
        })

}

module.exports = {
  upload,
  sendToCloudinary
}