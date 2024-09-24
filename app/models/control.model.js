module.exports = (sequelize, Sequelize) => {
    const Control = sequelize.define('control', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idCuenta: {
        type: Sequelize.INTEGER
      },
      FechaIngreso: {
        type: Sequelize.DATE
      },
      idTipoTransaccion: {
        type: Sequelize.INTEGER
      },
      MontoTransaccionCredito: {
        type: Sequelize.DECIMAL(10, 2)
      },
      MontoTransaccionDebito: {
        type: Sequelize.DECIMAL(10, 2)
      },
      copyrightby: {
        type: Sequelize.STRING,
        defaultValue: 'UMG Antigua'
      }
    });
  
    return Control;
  };
  