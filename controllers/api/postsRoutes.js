const router = require('express').Router();
const { Posts, User} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
      const userPost = await Posts.findAll({
          include: [User],
      });
      res.status(200).json(userPost);
  } catch (err) {
      res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  
    try {
      
      const newPost = await Posts.create({ ...body, user_id: req.session.user_id });
      res.json(newPost);
    
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/:id',  withAuth, async (req, res) => {
    try {
      const [aRows] = await Posts.update(req.body, {
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
  
  router.delete('/:id',  withAuth, async (req, res) => {
    try {
      const [aRows] = Posts.destroy({
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


  module.exports= router;