const express = require('express')
const app = express()
const public = require('./public.routes')
const admin = require('./admin.routes')
const user = require('./user.routes')
const image = require('./image.routes')
const morgan = require('morgan')
const cors = require('cors')
const imageIsPrivate = require('../middlewares/imageIsPrivate')
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
//config
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/", public);
app.use('/admin', admin)
app.use('/api/user', user)
app.use('/api/image', image);
app.use(express.static('public'));
app.use('/images', imageIsPrivate, express.static('uploads'));
app.use('/images-user', express.static('uploads'));

module.exports = app;