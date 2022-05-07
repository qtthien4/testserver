const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'traveloka',
    username: 'sa',
    password: 'Qq123456789',
    host: '95.111.203.185',
    port: '1433',
    dialect: 'mssql',
    dialectOptions:{
        ssl: false
    },
    define: {
        freezeTableName: true
    }
  });

  db.authenticate()
  .then(() => console.log("ket noi thanh cong"))
  .catch(err => console.log(err))

  const partner = db.define('Partner', {
      IdPartner: Sequelize.CHAR(20),
      PartnerName: Sequelize.TEXT,
      password: Sequelize.CHAR(200)
  })

  partner.removeAttribute('id');
  partner.removeAttribute('createdAt');
  partner.removeAttribute('updatedAt');

  db.sync();

  partner.findOne({
      raw: true,
      where: {
        IdPartner: "54"
      },
      order: Sequelize.col('IdPartner'),
    }).then(partner => console.log(partner));

    