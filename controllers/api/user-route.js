const router = require('express').Router();
const { User } = require('../../models');

// // creates a new user

router.post('/', async (req, res) => {
    try {
        const userDB = await User.create({
            username: req.body.username, 
            email: req.body.email,
            password: req.body.password,
        });
        // req.session.save(() => {
        //     req.session.loggedIn = true;
            res.status(200).json(userDB);
        // });
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
            res
             .status(400).json({ message: 'Invalid email or password!' });
            return;
        }

    req.session.save(() => {
        req.session.loggedIn = true;
        res 
        .status(200).json({ user: userDB, message: 'You are logged in, Welcome!' });
    });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
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