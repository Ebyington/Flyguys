const router= require('express').Router();
const { Post, Meetups } = require('../models');

// const withAuth = require('../utils/auth');
// needs withAuth before deploy, left out for db testing
 router.get('/', async (req, res) => {
    try {
        const postData = await Post.finAll({
            where: {
                user_id: req.user_id,
            },
        });
        const posts = postData.map((post) => post.get({ plain: true}));

        res.render('postHistory', {
            layout: 'dashboard',
            posts,
        });
        
    } catch (err) {
        res.redirect('login');
    }
 });
 router.get('/', async (req, res) => {
    try {
        const meetData = await Meetups.finAll({
            where: {
                user_id: req.user_id,
            },
        });
        const meetups = meetData.map((Meetups) => meetups.get({ plain: true}));

        res.render('postHistory', {
            layout: 'dashboard',
            Meetups,
        });
        
    } catch (err) {
        res.redirect('login');
    }
 });
// new post get for user profile dash
 router.get('/new', (req, res) => {
    res.render('newpost', {
        layout: 'dashboard',
    });
 });

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