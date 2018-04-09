const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../models').User;
const config = require('../config');

const authenticate = params => {
    return Users.findOne({
        where: {
            username: params.username
        },
        raw: true
    }).then(user => {
        
        console.log(user.username);

        if(!user)
            throw new Error('Authentication failed. User not found.');
        if(!bcrypt.compareSync(params.password || '', user.password))
            throw new Error('Authentication failed. Wrong password.');
        const payload = {
            username: user.username,
            id: user.id,
            time: new Date()
        };

        var token = jwt.sign(payload, config.jwtSecret, {
            expiresIn: config.tokenExpireTime
        });

        return {userToken: token, userId: user.id};
    });
}

module.exports = {
    authenticate
}