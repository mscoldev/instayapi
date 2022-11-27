"use strict";

var _require = require('express'),
  Router = _require.Router;
var _require2 = require('../controllers/user.controller'),
  getUser = _require2.getUser;
var router = Router();
router.get('/', getUser);
module.exports = router;