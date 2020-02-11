const bcrypt = require('bcrypt')

module.exports = (sequelize, Sequelize) => {

    const users = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true

        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },

        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
        {

            hooks: {
                beforeCreate: function (user) {
                    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
                }
            }
        })

    users.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    }
    return users

}