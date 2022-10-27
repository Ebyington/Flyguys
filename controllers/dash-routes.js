const router= require('express').Router();
const { Post } = require('../models/posts');

// const withAuth = require('../utils/auth');
// needs withAuth before deploy, left out for db testing
 router.get('/', async (req, res) => {
    try {
        const postData = await Post.finAll({
            where: {
                userId: req.userId,
            },
        });
        const posts = postData.map((post) => post.get({ plain: true}));

        res.render('postHistory', {
            layout: 'dashboard',
            post,
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


module.exports= router;