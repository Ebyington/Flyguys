const withAuth = (req, res, next) => {
    // redirect to /login page in user-route.js
    if (!req.session.loggedIn) {
        res.redirect('/login')
    } else {
        next();
    }
};

module.exports = withAuth;
