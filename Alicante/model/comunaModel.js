var db = require('../db/dbconfig');

var Comuna = {
    getMaxIdComuna: function (callback) {
        return db.query('SELECT MAX(id_com) AS max_id FROM comuna', callback);
    },
    listarComuna: function (callback) {
        return db.query('SELECT id_com, nombre, id_prov FROM comuna', callback);
    },
    obtenerComunaId: function (id, callback) {
        return db.query('SELECT id_com, nombre, id_prov FROM comuna WHERE id_com=?', [id], callback);
    },
    agregarComuna: function (nombre, id_prov, callback) {
        return db.query('INSERT INTO comuna (nombre, id_prov) values (?,?)', [nombre, id_prov], callback);
    },
    eliminarComuna: function (id, callback) {
        return db.query('DELETE FROM comuna WHERE id_com=?', [id], callback);
    },
    actualizarComuna: function (id, nombre, id_prov, callback) {
        return db.query('UPDATE comuna SET nombre=? id_prov=? WHERE id_com=?', [nombre, id_prov, id], callback);
    }
};

module.exports = Comuna;