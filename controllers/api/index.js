// Outline for the routes once files are built

const router = require('express').Router();

const userRoutes = require('./user-route');



const meetRoutes = require('./meetups-routes');

router.use('/users', userRoutes);
router.use('/meetups', meetRoutes);

module.exports = router;
