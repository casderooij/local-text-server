const jwt = require('jsonwebtoken');
const config = require('../config');

const checkAuth = (req, res, next) => {
    var token = req.headers['token'];
    if (!token) {
        console.log(token);
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
        }

        req.user = {
            username: decoded.username,
            id: decoded.id
        };

        console.log(req.user);

        next();
    });
}

module.exports = {
    checkAuth
}