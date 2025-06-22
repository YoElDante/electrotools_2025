/**
 * index.router.js
 * Router principal de la aplicación.
 *
 * Encargado de importar y delegar las rutas a cada sub-router de la aplicación.
 * Este router se monta en '/' en app.js.
 *
 * @author Dante Marcos Delprato
 * @version 1.0
 * @date 2025-06-07
 */

var express = require('express');
var router = express.Router();

/* Requiriendo Todas las Rutas */
const mainRouter = require('./home.routes');
const userRouter = require('./users.routes');
const productRouter = require('./product.routes');

/* Derivando las Rutas */
router.use('/', mainRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);


module.exports = router;

