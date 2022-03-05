const router = require('express').Router();
const createRole = require("../controller/role/createRole");
//const createPermission = require("../controller/permissions/cretePermission");

//router.post('/crete-permission', createPermission);
router.post('/role/create', createRole);

module.exports = router;