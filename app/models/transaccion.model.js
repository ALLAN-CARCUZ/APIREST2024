module.exports = (sequelize, Sequelize) => {
    const Transaccion = sequelize.define('transaccion', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      descripcion: {
        type: Sequelize.STRING
      },
      copyrightby: {
        type: Sequelize.STRING,
        defaultValue: 'UMG Antigua'
      }
    });
  
    return Transaccion;
  };
  