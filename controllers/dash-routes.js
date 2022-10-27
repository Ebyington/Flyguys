const router= require('express').Router();
const { User, Profile, Posts, Meetups } = require('../models');

// const withAuth = require('../utils/auth');
// needs withAuth before deploy, left out for db testing

///// Get users POsts,Profile, Meetups//////////
 router.get('/', async (req, res) => {
    try {

        const profData = await Profile.findAll({
            where:{user_id: req.user_id},
        });
        
        const posts = profData.map((Profile) => Profile.get({ plain: true}));
        res.render('AdminAllProfile', {
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        // res.redirect('login');
        res.status(500).json(err);
    }
 });
 router.get('/', async (req, res) => {
    try {

        const profData = await Posts.findAll({
            where:{user_id: req.user_id},
        });
        
        const posts = profData.map((Posts) => Posts.get({ plain: true}));
        res.render('AdminAllPosts', {
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        // res.redirect('login');
        res.status(500).json(err);
    }
 });

 router.get('/', async (req, res) => {
    try {

        const profData = await Meetups.findAll({
            where:{user_id: req.user_id},
        });
        
        const posts = profData.map((Meetups) => Meetups.get({ plain: true}));
        res.render('AdminAllMeetups', {
            layout: 'dashboard',
            posts,
        });
    } catch (err) {
        // res.redirect('login');
        res.status(500).json(err);
    }
 });


// // opens handlebars views to a user form to allow a new Meetup, Post, Profile
router.get('/newMeetup', (req, res) => {
    res.render('newMeetup', {
        layout: 'dashboard',
    });
 });
 router.get('/newPost', (req, res) => {
    res.render('newPost', {
        layout: 'dashboard',
    });
 });

 router.get('/newProfile', (req, res) => {
    res.render('newProfile', {
        layout: 'dashboard',
    });
 });

/////// edit Posts///////
 router.get('/edit/:id', async (req, res) => {
    try {
      const postData = await Posts.findByPk(req.params.id);
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('editPost', {
          layout: 'dashboard',
          post,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });
/////// edit Meetups///////
  router.get('/edit/:id', async (req, res) => {
    try {
      const postData = await Meetups.findByPk(req.params.id);
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('editMeetup', {
          layout: 'dashboard',
          post,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });

  //// edit Profile//////
  router.get('/edit/:id', async (req, res) => {
    try {
      const postData = await Profile.findByPk(req.params.id);
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('editProfile', {
          layout: 'dashboard',
          post,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });
module.exports= router;