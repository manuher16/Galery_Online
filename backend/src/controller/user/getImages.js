
const User = require('../../models/user');
const mongoose = require('mongoose');
const getImages = async (req, res) => {
    try {
        const { userId } = req;
        const images = await User.aggregate([
            {
                '$match': {
                    '_id': mongoose.Types.ObjectId('61d5efec9862b2f7d1b27ef5')
                }
            }, {
                '$lookup': {
                    'from': 'images',
                    'localField': '_id',
                    'foreignField': 'idUser',
                    'as': 'images'
                }
            }, {
                '$unwind': {
                    'path': '$images'
                }
            }, {
                '$project': {
                    '_id': 1,
                    'images': {
                        'user': {
                            'name': '$name',
                            'email': '$email'
                        },
                        '_id': 1,
                        'idUser': 1,
                        'url': 1,
                        'filename': 1,
                        'favorite': 1,
                        'createdAt': {
                            '$dateToString': {
                                'format': '%Y-%m-%d',
                                'date': '$images.createdAt',
                                'timezone': 'America/Tegucigalpa'
                            }
                        }
                    },
                    'month': {
                        '$month': '$images.createdAt'
                    }
                }
            }, {
                '$group': {
                    '_id': '$month',
                    'images': {
                        '$push': '$$ROOT.images'
                    }
                }
            },
            {
                '$sort': {
                    '_id': 1
                }
            }
        ])

        res.json(images);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    };
}
module.exports = getImages;