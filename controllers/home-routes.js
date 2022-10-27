const { Meetups, User, Profile, Posts } = require('../models');

const router= require('express').Router();




// get all posts for homepage
router.get('/', async (req, res) => {
    try {
      const pData = await Meetups.findAll({
        include: [User],
        
      });
  
      const meetup = pData.map((Meetups) => Meetups.get({ plain: true }));
  
      res.render('MeetupAll', { meetup });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/meetup/:id', async (req, res) => {
    try {
      const pData = await Meetups.findByPk(req.params.id, {
        include: [User],
      });
  
      if (pData) {
        const meetup = pData.get({ plain: true });
  
        res.render('singleMeetup', { meetup });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const pData = await Posts.findAll({
        include: [User],
        
      });
  
      const userPost = pData.map((Posts) => Posts.get({ plain: true }));
  
      res.render('PostAll', { userPost });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/posts/:id', async (req, res) => {
    try{
      const pData = await Posts.findByPk(req.params.id, {
        include: [User],
      });

      if (pData) {
        const userpost = pData.get({ plain: true });
        res.render('singlepost', { userpost });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  ///// login sessions//////

  router.get('/login', (req, res)=>{if (req.session.loggedIn){res.redirect('/'); return}res.render('login')});

  router.get('/signup', (req, res)=>{if (req.session.loggedIn){res.redirect('/'); return}res.render('signup')});


module.exports= router;