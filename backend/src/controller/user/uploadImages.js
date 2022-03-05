const multer = require('multer')
const Image = require('../../models/image');
const uploadImages = async (req, res) => {
    req.files.forEach(async (file) => {
        let image = new Image({
            idUser: req.userId,
            url: file.path,
            filename: file.filename,
            metadata: {
                name: file.originalname,
                size: file.size,
                type: file.mimetype
            }

        })
        await image.save();
    })
    res.json({ files: req.files })
};
module.exports = uploadImages;