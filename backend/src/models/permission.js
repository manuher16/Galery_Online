const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaPermission = new schema({
    name: {
        type: String,
        required: true
    },
    collection: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        required: true
    },
    write: {
        type: Boolean,
        required: true
    },
    me: {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('permission', schemaPermission);