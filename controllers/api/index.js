// Outline for the routes once files are built

const router = require('express').Router();

const userRoutes = require('./user-route.js');
const postRoutes = require('./postsRoutes');
const meetRoutes = require('./meetups-routes');
const ProfileRoutes = require('./profile-routes');

router.use('/user', userRoutes);
router.use('/meetups', meetRoutes);
router.use('/posts', postRoutes);
router.use('/profile', ProfileRoutes);

module.exports = router;
