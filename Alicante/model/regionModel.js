var db = require('../db/dbconfig');

var Region = {
    getMaxIdRegion: function (callback) {
        return db.query('SELECT MAX(id_reg) AS max_id FROM region', callback);
    },
    listarRegion: function (callback) {
        return db.query('SELECT id_reg, nombre, orden FROM region', callback);
    },
    obtenerRegionId: function (id, callback) {
        return db.query('SELECT id_reg, nombre, orden FROM region WHERE id_reg=?', [id], callback);
    },
    agregarRegion: function (nombre, orden, callback) {
        return db.query('INSERT INTO region (nombre, orden) values (?,?)', [nombre, orden], callback);
    },
    eliminarRegion: function (id, callback) {
        return db.query('DELETE FROM region WHERE id_reg=?', [id], callback);
    },
    actualizarRegion: function (id, nombre, orden, callback) {
        return db.query('UPDATE region SET descripcion=? WHERE id_reg=?', [nombre, orden, id], callback);
    }
};

module.exports = Rol;