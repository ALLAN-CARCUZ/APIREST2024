let express = require('express');
let router = express.Router();
const transacciones = require('../controllers/transaccion.controller.js');

// Crear una nueva transacción
router.post('/transacciones', transacciones.create);

// Obtener todas las transacciones
router.get('/transacciones', transacciones.findAll);

// Obtener una transacción por ID
router.get('/transacciones/:id', transacciones.findById);

// Actualizar una transacción por ID
router.put('/transacciones/:id', transacciones.update);

// Eliminar una transacción por ID
router.delete('/transacciones/:id', transacciones.delete);

module.exports = router;
