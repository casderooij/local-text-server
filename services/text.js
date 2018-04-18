const sequelize = require('sequelize');
const Texts = require('../models').Text;

const getAll = () => Texts.findAll();

const getById = id => Texts.findById(id);

const addText = text => Texts.create(text);

const findNearestTexts = (lat, lon) => Texts.findAll({
    attributes: [[sequelize.literal("6371 * acos(cos(radians("+lat+")) * cos(radians(latitude)) * cos(radians("+lon+") - radians(longitude)) + sin(radians("+lat+")) * sin(radians(latitude)))"),'distance'], 'id', 'user_id', 'title'],
    order: sequelize.col('distance'),
    limit: 10
});

const findNearestThreeTexts = (lat, lon) => Texts.findAll({
    attributes: [[sequelize.literal("6371 * acos(cos(radians("+lat+")) * cos(radians(latitude)) * cos(radians("+lon+") - radians(longitude)) + sin(radians("+lat+")) * sin(radians(latitude)))"),'distance'], 'id', 'user_id', 'title'],
    order: sequelize.col('distance'),
    limit: 3
});

const updateText = (id, text) => Texts.update(
    {title: text.title, body: text.body, latitude: text.latitude, longitude: text.longitude},
    {
        where: {id: id},
        returning: true
    }
);

const removeText = id => Texts.destroy({
    where: {id: id}
});

module.exports = {
    addText,
    getAll,
    getById,
    findNearestTexts,
    findNearestThreeTexts,
    updateText,
    removeText
}