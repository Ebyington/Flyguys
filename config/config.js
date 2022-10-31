
///// Needs to change once sessions are created//////

const Sequelize = require('sequelize');
require('dotenv').config();

// lines 10-18 for local testing, 20-36 for heroku deploy

////////// New Code format for sesions////////////
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });

// module.exports = sequelize;

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}
module.exports = sequelize;