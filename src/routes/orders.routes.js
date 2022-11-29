const { Router } = require('express');

const { getOrder, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/order.controller')

const router = Router();


router.get('/', getOrder);
router.get('/:_id', getOrderById);
router.post('/', createOrder);
router.put('/:_id', updateOrder);
router.delete('/', deleteOrder);

module.exports = router;