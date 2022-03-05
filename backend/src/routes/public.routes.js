const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Public route');
})
module.exports = router;