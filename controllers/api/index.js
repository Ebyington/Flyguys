// Outline for the routes once files are built

const router = require('express').Router();

const userRoutes = require('./user-route.js');
const postRoutes = require('./postsRoutes');
const meetRoutes = require('./meetups-routes');
const ProfileRoutes = require('./profile-routes');

router.use('/User', userRoutes);
router.use('/Meetups', meetRoutes);
router.use('/Posts', postRoutes);
router.use('/Profile', ProfileRoutes);

module.exports = router;
