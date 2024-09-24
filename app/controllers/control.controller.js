const db = require('../config/db.config.js');
const Control = db.Control;

// Crear y guardar un nuevo control
exports.create = (req, res) => {
  let control = {};

  try {
    // Construir objeto control desde el cuerpo de la solicitud
    control.idCuenta = req.body.idCuenta;
    control.FechaIngreso = req.body.FechaIngreso;
    control.idTipoTransaccion = req.body.idTipoTransaccion;
    control.MontoTransaccionCredito = req.body.MontoTransaccionCredito;
    control.MontoTransaccionDebito = req.body.MontoTransaccionDebito;

    // Guardar en la base de datos MySQL
    Control.create(control).then(result => {
      res.status(200).json({
        message: "Control creado exitosamente con id = " + result.id,
        control: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  }
};

// Obtener todos los controles
exports.findAll = (req, res) => {
  Control.findAll().then(controles => {
    res.status(200).json(controles);
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};

// Obtener un control por ID
exports.findById = (req, res) => {
  Control.findByPk(req.params.id).then(control => {
    if (!control) {
      return res.status(404).json({
        message: "Control no encontrado con id = " + req.params.id
      });
    }
    res.status(200).json(control);
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};

// Actualizar un control por ID
exports.update = (req, res) => {
  let id = req.params.id;

  Control.update(req.body, { where: { id: id } }).then(num => {
    if (num == 1) {
      res.status(200).json({
        message: "Control actualizado exitosamente."
      });
    } else {
      res.status(404).json({
        message: `No se puede actualizar el control con id = ${id}. Tal vez el control no fue encontrado o req.body está vacío!`
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};

// Eliminar un control por ID
exports.delete = (req, res) => {
  let id = req.params.id;

  Control.destroy({ where: { id: id } }).then(num => {
    if (num == 1) {
      res.status(200).json({
        message: "Control eliminado exitosamente!"
      });
    } else {
      res.status(404).json({
        message: `No se puede eliminar el control con id = ${id}. Tal vez el control no fue encontrado!`
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};
