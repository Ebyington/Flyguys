const router = require('express').Router();
const { Meetups, User} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',  async (req, res) => {
  try {
      const UMeetups = await Meetups.findAll({
          include: [User],
      });
      res.status(200).json(UMeetups);
  } catch (err) {
      res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
    const body = req.body;
  
    try {
      const newMeetup = await Meetups.create({ ...body, user_id: req.session.user_id });
      res.json(newMeetup);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const [aRows] = await Meetups.update(req.body, {
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
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const [aRows] = Meetups.destroy({
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