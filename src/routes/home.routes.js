var express = require('express');
var router = express.Router();

const homeController = require('../controllers/home.controller');

/* GET home page. */
router.get('/', homeController.home)

module.exports = router;