const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authService = require('../services/auth');
const userService = require('../services/user');

function login(req, res) {
    return authService.authenticate(req.body)
    .then(token => {
        res.send({
            success: true,
            data: { token }
        });
        
        console.log(token);
    })
    .catch(err => {
        res.send({
            success: false,
            message: err.message
        });
    })
};

function register(req, res) {
    var login = req.body.username;

    console.log(login, req.body.password);

    return userService.getUserByLogin(req.body.username || '')
    .then(exists => {

        if(exists) {
            return res.send({
                success: false,
                message: 'Registration failed. User with this email already registered.'
            });
        }
        
        var user = {
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 2)
        }

        return userService.addUser(user)
        .then(() => res.send({success: true}));

    });
};

module.exports = {
    login,
    register
}