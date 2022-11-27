"use strict";

var _require = require('express'),
  Router = _require.Router;
var _require2 = require('../controllers/order.controller'),
  getOrder = _require2.getOrder,
  createOrder = _require2.createOrder,
  updateOrder = _require2.updateOrder,
  deleteOrder = _require2.deleteOrder;
var router = Router();
router.get('/', getOrder);
router.post('/', createOrder);
router.put('/:_id', updateOrder);
router["delete"]('/', deleteOrder);
module.exports = router;