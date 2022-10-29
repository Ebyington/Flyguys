const router = require('express').Router();

const userRoutes = require('./routes');

router.use('/api', userRoutes);

module.exports = router;