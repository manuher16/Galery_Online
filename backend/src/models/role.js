const mongoose = require('mongoose');

const Role = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    permissions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Role', Role);