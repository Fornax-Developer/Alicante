var mysql = require('mysql');

var coneccion = mysql.createPool({
    host: 'localhost',
    user: 'enfermeria',
    password: 'alicante.2017',
    database: 'alicante_enfermeria',
    connectTimeout: 10000,
    ssl: false
});

module.exports = coneccion; 