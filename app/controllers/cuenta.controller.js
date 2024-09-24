const db = require('../config/db.config.js');
const Cuenta = db.Cuenta;

// Crear y guardar una nueva cuenta
exports.create = (req, res) => {
  let cuenta = {};

  try {
    // Construir objeto cuenta desde el cuerpo de la solicitud
    cuenta.NumeroCuenta = req.body.NumeroCuenta;
    cuenta.TipoCuenta = req.body.TipoCuenta;
    cuenta.NombreCompleto = req.body.NombreCompleto;
    cuenta.FechaIngreso = req.body.FechaIngreso;
    cuenta.FechaNacimiento = req.body.FechaNacimiento;
    cuenta.Genero = req.body.Genero;
    cuenta.SaldoInicial = req.body.SaldoInicial;

    // Guardar en la base de datos MySQL
    Cuenta.create(cuenta).then(result => {
      res.status(200).json({
        message: "Cuenta creada exitosamente con id = " + result.id,
        cuenta: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  }
};

// Obtener todas las cuentas
exports.findAll = (req, res) => {
  Cuenta.findAll().then(cuentas => {
    res.status(200).json(cuentas);
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};

// Obtener una cuenta por ID
exports.findById = (req, res) => {
  Cuenta.findByPk(req.params.id).then(cuenta => {
    if (!cuenta) {
      return res.status(404).json({
        message: "Cuenta no encontrada con id = " + req.params.id
      });
    }
    res.status(200).json(cuenta);
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};

// Actualizar una cuenta por ID
exports.update = (req, res) => {
  let id = req.params.id;

  Cuenta.update(req.body, { where: { id: id } }).then(num => {
    if (num == 1) {
      res.status(200).json({
        message: "Cuenta actualizada exitosamente."
      });
    } else {
      res.status(404).json({
        message: `No se puede actualizar la cuenta con id = ${id}. Tal vez la cuenta no fue encontrada o req.body está vacío!`
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};

// Eliminar una cuenta por ID
exports.delete = (req, res) => {
  let id = req.params.id;

  Cuenta.destroy({ where: { id: id } }).then(num => {
    if (num == 1) {
      res.status(200).json({
        message: "Cuenta eliminada exitosamente!"
      });
    } else {
      res.status(404).json({
        message: `No se puede eliminar la cuenta con id = ${id}. Tal vez la cuenta no fue encontrada!`
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Error!",
      error: error.message
    });
  });
};
