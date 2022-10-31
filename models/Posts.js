const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Posts extends Model {}

Posts.init(

    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },  
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        typeOfDrone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        videoLink: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts'
    }
);

module.exports = Posts;