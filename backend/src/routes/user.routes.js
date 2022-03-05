const router = require('express').Router();
const createUser = require("../controller/user/createUser");
const login = require("../controller/user/login");
const getImages = require("../controller/user/getImages");
const uploadImages = require("../controller/user/uploadImages");
const likeImage = require("../controller/user/likeImage");

//Middlewares
const auth = require("../middlewares/validateToken");
const upload = require("../middlewares/uploadMultiImages");
router.post('/create', createUser)
router.post('/login', login)
router.get('/images', auth, getImages)
router.post('/upload/images', auth, upload.array('images', 10), uploadImages)
router.put('/image/like/:id', auth, likeImage)

module.exports = router;