const Sequelize = require('sequelize')
const users = require('./models')

const db = new Sequelize('banks', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});


db.authenticate()
    // db.sync(
    //     // { force: true }
    // )
    .then(() => console.log('Connection has been established successfully.'))
    .catch((err) => console.log('Unable to connect to the database:', err))

const usersModel = users(db, Sequelize)
console.log(usersModel)

module.exports = usersModel