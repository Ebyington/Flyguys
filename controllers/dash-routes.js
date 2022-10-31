const router= require('express').Router();
const { User, Profile, Posts, Meetups } = require('../models');

const withAuth = require('../utils/auth');
// needs withAuth before deploy, left out for db testing

 router.get('/', withAuth, async (req, res) => {
    try {
        
        const profData = await Posts.findAll({
            where:{user_id: req.session.user_id},
        });
        const mData = await Meetups.findAll({
          where:{user_id: req.session.user_id},
        });
        const profileData = await Profile.findAll({
          where:{user_id: req.session.user_id},
      });
        const profile = profileData.map((Profile) => Profile.get({ plain: true}));
        const posts = profData.map((Posts) => Posts.get({ plain: true}));
        const meetups = mData.map((Meetups) => Meetups.get({ plain: true}));
        res.render('allPostsAdmin', {
            layout: 'dashboard',
            posts,
            meetups,
            profile,
          
        });
    } catch (err) {
        res.redirect('login');
        res.status(500).json(err);
    }
 });




// // opens handlebars views to a user form to allow a new Meetup, Post, Profile
router.get('/newMeetup', withAuth,(req, res) => {
    res.render('newMeetup', {
        layout: 'dashboard',
    });
 });
 router.get('/newPost', withAuth, (req, res) => {
    res.render('newPost', {
        layout: 'dashboard',
    });
 });

 router.get('/newProfile',withAuth, (req, res) => {
    res.render('newProfile', {
        layout: 'dashboard',
    });
 });

/////// edit Posts///////
 router.get('/edit/:id', withAuth, async (req, res) => {
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
  router.get('/editMeetup/:id', withAuth, async (req, res) => {
    try {
      const postData = await Meetups.findByPk(req.params.id);
  
      if (postData) {
        const meetups = postData.get({ plain: true });
  
        res.render('editMeetup', {
          layout: 'dashboard',
          meetups,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });

  //// edit Profile//////
  router.get('/editProfile/:id', withAuth, async (req, res) => {
    try {
      const postData = await Profile.findByPk(req.params.id);
  
      if (postData) {
        const profile = postData.get({ plain: true });
  
        res.render('editProfile', {
          layout: 'dashboard',
          profile,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });
module.exports= router;