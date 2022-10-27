const router= require('express').Router();
const { User, Profile, Post, Meetups } = require('../models');

// const withAuth = require('../utils/auth');
// needs withAuth before deploy, left out for db testing
 router.get('/:id', async (req, res) => {
    try {

        const profData = await User.findByPk(
          req.params.id
        );
        res.status(400).json(profData);
        const posts = postData.map((post) => post.get({ plain: true}));
        const meetData = await Meetups.findAll({
            where: {
                user_id: req.body.user_id,
            },
        });
        const meetups = meetData.map((meetups) => meetups.get({ plain: true}));
        // const profile = 

        res.render('dashboard', {
            meetups,
            posts,
            profile,
            user,
        
        });
        
    } catch (err) {
      // add in when login auth is verified
        // res.redirect('login');
        res.status(500).json(err);
    }
 });

// // new post get for user profile dash
 router.get('/new', (req, res) => {
    res.render('newpost', {
        layout: 'dashboard',
    });
 });

//  delete post
 router.delete('/:id', async (req, res) => {
    try {
      const [aRows] = Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (aRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

 router.get('/edit/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id);
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('edit', {
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