const db = require('../config/db.config.js');
const Transaccion = db.Transaccion;

// Crear y guardar una nueva transacción
exports.create = (req, res) => {
  let transaccion = {};

  try {
    // Construir objeto transaccion desde el cuerpo de la solicitud
    transaccion.descripcion = req.body.descripcion;

    // Guardar en la base de datos MySQL
    Transaccion.create(transaccion).then(result => {
      res.status(200).json({
        message: "Transacción creada exitosamente con id = " + result.id,
        transaccion: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  }
};

// Obtener todas las transacciones
exports.findAll = (req, res) => {
  Transaccion.findAll().then(transacciones => {
    res.status(200).json(transacciones);
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};

// Obtener una transacción por ID
exports.findById = (req, res) => {
  Transaccion.findByPk(req.params.id).then(transaccion => {
    if (!transaccion) {
      return res.status(404).json({
        message: "Transacción no encontrada con id = " + req.params.id
      });
    }
    res.status(200).json(transaccion);
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};

// Actualizar una transacción por ID
exports.update = (req, res) => {
  let id = req.params.id;

  Transaccion.update(req.body, { where: { id: id } }).then(num => {
    if (num == 1) {
      res.status(200).json({
        message: "Transacción actualizada exitosamente."
      });
    } else {
      res.status(404).json({
        message: `No se puede actualizar la transacción con id = ${id}. Tal vez la transacción no fue encontrada o req.body está vacío!`
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};

// Eliminar una transacción por ID
exports.delete = (req, res) => {
  let id = req.params.id;

  Transaccion.destroy({ where: { id: id } }).then(num => {
    if (num == 1) {
      res.status(200).json({
        message: "Transacción eliminada exitosamente!"
      });
    } else {
      res.status(404).json({
        message: `No se puede eliminar la transacción con id = ${id}. Tal vez la transacción no fue encontrada!`
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};
