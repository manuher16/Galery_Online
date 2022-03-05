const mongoose = require('mongoose');

const Image = mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    url: {
        type: String,
        required: true
    },

    filename: {
        type: String,
        unique: true,
        required: true
    },
    private: {
        type: Boolean,
        default: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    likes: {
        type: Number,
        default: 0
    },


    metadata: {
        type: Object,
        required: true
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('Image', Image);