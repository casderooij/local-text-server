const sequelize = require('../db');
const Users = require('../models').User;

const addUser = user => Users.create(user);

const getUserByLogin = login => Users.findOne({where: {login}});

const getUserById = id => Users.findById(id);

const getAll = () => Users.findAll();

module.exports = {
    addUser,
    getUserByLogin,
    getUserById,
    getAll
}