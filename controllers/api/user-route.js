const router = require('express').Router();
const { User } = require('../../models');

// // creates a new user

router.post('/', async (req, res) => {
    try {
        const userDB = await User.create({
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.user_id= userDB.id;
            req.session.email= userDB.email;
            req.session.loggedIn = true;
            res.status(200).json(userDB);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userDB = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (!userDB) {
            res.status(400).json({ message: 'Invalid email or password!' });
            return;
        }

        const validPassword = userDB.checkPassword(req.body.password);

        if (!validPassword) {
          res.status(400).json({ message: 'No user account found!' });
          return;
        }
    req.session.save(() => {
        req.session.user_id= userDB.id;
        req.session.email= userDB.email;
        req.session.loggedIn = true;
        res.status(200).json({ userDB, message: 'You are logged in, Welcome!' });
    });
    } catch (err) {
        
        res.status(500).json({ message: 'No user account found!' });
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();

        });
    } else {
        res.status(404).end(); 
    }
});

module.exports = router;