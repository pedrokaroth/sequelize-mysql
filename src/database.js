const Sequelize = require('sequelize')

module.exports = {
  database: new Sequelize(
    'database',
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD, {
      host: process.env.MYSQL_HOST,
      dialect: 'mysql',
      quoteIdentifiers: false,
      operatorAliases: false
    }
  )
}
