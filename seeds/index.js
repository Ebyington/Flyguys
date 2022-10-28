const sequelize = require('../config/config');
const TestingPost = require('./Posts');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await TestingPost();

  

  process.exit(0);
};

seedAll();