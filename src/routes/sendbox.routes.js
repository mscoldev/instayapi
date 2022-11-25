const { Router } = require('express');

const { getBox } = require('../controllers/sendbox.controller')

const router = Router();


router.get('/', getBox);

module.exports = router;