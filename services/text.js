const Texts = require('../models').Text;

const getAll = () => Texts.findAll();

const getById = id => Texts.findById(id);

const add = order => Texts.create(order);

module.exports = {
    add,
    getAll,
    getById
}