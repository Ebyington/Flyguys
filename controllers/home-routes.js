const { Meetups, User, Profile } = require('../models');

const router= require('express').Router();




// get all posts for homepage
router.get('/', async (req, res) => {
    try {
      const pData = await Meetups.findAll({
        include: [User],
        
      });
  
      const posts = pData.map((post) => post.get({ plain: true }));
  
      res.render('MeetupAll', { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/meetup/:id', async (req, res) => {
    try {
      const pData = await Meetups.findByPk(req.params.id, {
        include: [
            User,
            {
              model: Profile,
              include: [User],
            },
          ],
      });
  
      if (pData) {
        const post = pData.get({ plain: true });
  
        res.render('singleMeetup', { post });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/posts/:id', async (req, res) => {
    try{
      const pData = await postRouts.findByPk(req.params.id, {
        include: [
          User,
          {
            model: Profile,
            include: [User],
          },
        ],
      });

      if (pData) {
        const post = pData.get({ plain: true });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports= router;