const { Router } = require('express');

const { singIn } = require('../controllers/auth.controller')

const router = Router();


router.get('/', singIn);

module.exports = router;