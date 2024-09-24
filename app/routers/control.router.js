let express = require('express');
let router = express.Router();
const controles = require('../controllers/control.controller.js');

// Crear un nuevo control
router.post('/controles', controles.create);

// Obtener todos los controles
router.get('/controles', controles.findAll);

// Obtener un control por ID
router.get('/controles/:id', controles.findById);

// Actualizar un control por ID
router.put('/controles/:id', controles.update);

// Eliminar un control por ID
router.delete('/controles/:id', controles.delete);

module.exports = router;
