const Image = require('../../models/image');
const likeImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (image.idUser == req.userId) {
            await Image.findByIdAndUpdate(req.params.id, {
                favorite: !image.favorite,
            })
            return res.json({
                message: 'Like image',
                like: !image.favorite
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        })
    }

}

module.exports = likeImage;
