const router = require('express').Router();
const express = require('express');
const imageIsPrivate = require('../middlewares/imageIsPrivate');
const fs = require('fs')
router.get('/:filename', (req, res) => {
    fs.readFile(`./uploads/${req.params.filename}`, (err, data) => {
        if (err) {
            res.status(404).send('Not found')
        } else {
            res.send(data)
        }
    })
})

module.exports = router;
