const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Meetups extends Model{}

Meetups.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        location: DataTypes.STRING,
        image: DataTypes.STRING,
        counter: DataTypes.INTEGER
        
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'Meetups'
    }
);

module.exports= Meetups;