const Sequelize = require('sequelize')
const { database } = require('../database')

module.exports = database.define('heroes',
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false
    },
    power: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false
    }
  },
  {
    tableName: 'heroes',
    freezeTable: false,
    timestamps: true
  }
)
