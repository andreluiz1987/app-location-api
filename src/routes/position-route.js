'use strict'

const express = require('express');
const controller = require('../controllers/position-controller');
const router = express.Router();

router.post('/insertPosition', controller.post);

router.get('/getLastPosition', controller.getPositions)

router.post('/getAddress', controller.getAddress)

module.exports = router;