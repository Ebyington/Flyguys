const User = require('./User');
const Posts = require('./Posts');
const Meetups = require('./Meetups');

User.hasMany(Posts, {
    foreignKey: 'user_id',
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Meetups, {
    foreignKey: 'user_id', 
});

module.exports = { User, Posts, Meetups};