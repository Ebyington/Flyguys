const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const bcrypt = require('bcrypt');

// Password encrypt for later
class User extends Model {
    checkPassword(loginPassw) {
        return bcrypt.compareSync(loginPassw, this.password);

    }
}

// User info database
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [8],
                    isAlphanumeric: true,
                },

            },
        },


    {
        hooks: {
            beforeCreate: async (newUserData)=> {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updateUserData)=>{updateUserData.password= await bcrypt.hash(updateUserData.password, 10);return updateUserData;}
        },
        sequelize,
        freezeTableName: true,
        modelName: 'user',
    },
  
);

module.exports = User;