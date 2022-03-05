const Image = require('../models/image');
const imageIsPrivate = (req, res, next) => {
    const url = req.originalUrl;

    Image.findOne({ filename: url.split('/')[2] }, (err, image) => {
        if (err) {
            res.status(500).send('Internal server error')
        } else if (!image) {
            res.status(404).send('Not found')
        } else {
            if (image.private) {
                res.status(403).send('Not access')
            }
            else {
                next()
            }

        }
    })
}
module.exports = imageIsPrivate;