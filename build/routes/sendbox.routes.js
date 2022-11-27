"use strict";

var _require = require('express'),
  Router = _require.Router;
var _require2 = require('../controllers/sendbox.controller'),
  getBox = _require2.getBox;
var router = Router();
router.get('/', getBox);
module.exports = router;