const {database} =require('../config')

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: database.host,
        port: database.port,
        user: database.user,
        password: database.pass,
        database: database.db,
        charset: database.char,
        multipleStatements: true
    }
});

module.exports.knex=knex;