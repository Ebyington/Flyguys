const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Profile extends Model{}

Profile.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },  
        },
        username: DataTypes.STRING,
        posthistory: DataTypes.STRING,
        postcount: DataTypes.INTEGER,
        socialmedia: DataTypes.STRING,
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'Profile'
    }
);

module.exports = Profile;