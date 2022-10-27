const User = require('./User');
const Posts = require('./Posts');
const Meetups = require('./Meetups');
const Profile = require('./profile');
// fixed logic in relationships, added profile
User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
});
Meetups.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

User.hasMany(Meetups, {
    foreignKey: 'user_id', 
});
Profile.belongsTo(User, {
    foreignKey: 'user_id'
});
User.hasOne(Profile, {
    foreignKey: 'user_id'
});

module.exports = { User, Posts, Meetups, Profile};