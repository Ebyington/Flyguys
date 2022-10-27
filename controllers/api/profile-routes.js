const router = require('express').Router();
const { Profile, User} = require('../../models/');

router.get('/', async (req, res) => {
  try {
      const userPro = await Profile.findAll({
          include: [User],
      });
      res.status(200).json(userPro);
  } catch (err) {
      res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
    const body = req.body;
  
    try {
      const newProfile = await Profile.create({ ...body, user_id: req.user_id });
      res.json(newProfile);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const [aRows] = await Profile.update(req.body, {
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
  
  router.delete('/:id', async (req, res) => {
    try {
      const [aRows] = Profile.destroy({
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