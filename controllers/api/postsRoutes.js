const router = require('express').Router();
const { User, Posts} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userPosts = await Posts.findAll({
            include: [{model: User}],
        });
        res.status(200).json(userPosts);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userPosts = await Posts.create({
          description: req.body.description,
          typeOfDrone: req.body.typeOfDrone,
          tags: req.body.tags,  
        });
        res.status(200).json(userPosts);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;