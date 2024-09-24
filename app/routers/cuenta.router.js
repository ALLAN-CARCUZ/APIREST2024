let express = require('express');
let router = express.Router();
const cuentas = require('../controllers/cuenta.controller.js');

// Crear una nueva cuenta
router.post('/cuentas', cuentas.create);

// Obtener todas las cuentas
router.get('/cuentas', cuentas.findAll);

// Obtener una cuenta por ID
router.get('/cuentas/:id', cuentas.findById);

// Actualizar una cuenta por ID
router.put('/cuentas/:id', cuentas.update);

// Eliminar una cuenta por ID
router.delete('/cuentas/:id', cuentas.delete);

module.exports = router;
