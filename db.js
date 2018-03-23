const config = require('./config');
const Sequelize = require('sequelize');
var sequelize = new Sequelize(config.dbConnection);
require('sequelize-values')(sequelize);

module.exports = sequelize;