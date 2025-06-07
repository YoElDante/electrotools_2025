var express = require('express');
var router = express.Router();

const mainController = require('../controllers/main.controller');

/* GET home page. */
router.get('/', mainController.main)

module.exports = router;