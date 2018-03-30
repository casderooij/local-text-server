const sequelize = require('../db');
const Users = require('../models').User;

const addUser = user => Users.create(user);

const getUserByLogin = username => Users.findOne({where: {username}});

const getUserById = id => Users.findById(id);

const getAll = () => Users.findAll();

module.exports = {
    addUser,
    getUserByLogin,
    getUserById,
    getAll
}