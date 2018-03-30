const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: Sequelize.STRING,
    password: Sequelize.STRING,
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

const Text = sequelize.define('text', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    latitude: Sequelize.FLOAT(8,6),
    longitude: Sequelize.FLOAT(8,6),
    likes: Sequelize.INTEGER,
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

User.hasMany(Text, {foreignKey: 'user_id'});

module.exports = {
    User,
    Text
}