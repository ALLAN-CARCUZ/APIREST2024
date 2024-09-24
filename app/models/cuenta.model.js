module.exports = (sequelize, Sequelize) => {
    const Cuenta = sequelize.define('cuenta', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      NumeroCuenta: {
        type: Sequelize.INTEGER
      },
      TipoCuenta: {
        type: Sequelize.STRING
      },
      NombreCompleto: {
        type: Sequelize.STRING
      },
      FechaIngreso: {
        type: Sequelize.DATE
      },
      FechaNacimiento: {
        type: Sequelize.DATE
      },
      Genero: {
        type: Sequelize.STRING
      },
      SaldoInicial: {
        type: Sequelize.DECIMAL(10, 2)
      },
      copyrightby: {
        type: Sequelize.STRING,
        defaultValue: 'UMG Antigua'
      }
    });
  
    return Cuenta;
  };  