require('dotenv').config();

module.exports = {
    port: process.env.SERVER_PORT || 3000,
    dbConnection: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'db',
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',
        operatorsAliases: false
    },
    jwtSecret: process.env.JWT_SECRET || 'secret_key',
    tokenExpireTime: process.env.TOKEN_EXPIRE_TIME || '6h'
}