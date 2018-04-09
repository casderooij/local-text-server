const sequelize = require('sequelize');
const Texts = require('../models').Text;

const getAll = () => Texts.findAll();

const getById = id => Texts.findById(id);

const add = order => Texts.create(order);

const findNearestTexts = (lat, lon) => Texts.findAll({
    attributes: [[sequelize.literal("6371 * acos(cos(radians("+lat+")) * cos(radians(latitude)) * cos(radians("+lon+") - radians(longitude)) + sin(radians("+lat+")) * sin(radians(latitude)))"),'distance'], 'id', 'user_id', 'title'],
    order: sequelize.col('distance'),
    limit: 10
});

module.exports = {
    add,
    getAll,
    getById,
    findNearestTexts
}