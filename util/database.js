const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete',
    'root',
    '3623wxci',
    {
        dialect: 'mysql',
        host: 'localhost'
    },
);

module.exports = sequelize;