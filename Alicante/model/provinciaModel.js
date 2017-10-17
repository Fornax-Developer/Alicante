var db = require('../db/dbconfig');

var Provincia = {
    getMaxIdProvincia: function (callback) {
        return db.query('SELECT MAX(id_prov) AS max_id FROM provincia', callback);
    },
    listarProvincia: function (callback) {
        return db.query('SELECT id_prov, nombre, id_reg FROM provincia', callback);
    },
    obtenerProvinciaId: function (id, callback) {
        return db.query('SELECT id_prov, nombre, id_reg FROM provincia WHERE id_prov=?', [id], callback);
    },
    agregarProvincia: function (nombre, id_reg, callback) {
        return db.query('INSERT INTO provincia (nombre, id_reg) values (?,?)', [nombre, id_reg], callback);
    },
    eliminarProvincia: function (id, callback) {
        return db.query('DELETE FROM provincia WHERE id_prov=?', [id], callback);
    },
    actualizarProvincia: function (id, nombre, id_reg, callback) {
        return db.query('UPDATE provincia SET nombre=? id_reg=? WHERE id_prov=?', [nombre, id_reg, id], callback);
    }
};

module.exports = Provincia;