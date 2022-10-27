// Outline for the routes once files are built

const router = require('express').Router();

const userRoutes = require('./user-route');
const postRoutes = require('./postsRoutes');



const meetRoutes = require('./meetups-routes');

router.use('/users', userRoutes);


module.exports = router;
