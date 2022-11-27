"use strict";

var _require = require('express'),
  Router = _require.Router;
var _require2 = require('../controllers/auth.controller'),
  singIn = _require2.singIn;
var router = Router();
router.get('/', singIn);
module.exports = router;