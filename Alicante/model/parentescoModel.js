var db = require('../db/dbconfig');

var Parentesco = {
    getMaxIdParentesco: function (callback) {
        return db.query('SELECT MAX(id_par) AS max_id FROM parentesco', callback);
    },
    listarParentesco: function (callback) {
        return db.query('SELECT id_par, descripcion FROM parentesco', callback);
    },
    obtenerParentescoId: function (id, callback) {
        return db.query('SELECT id_par, descripcion FROM parentesco WHERE id_par=?', [id], callback);
    },
    agregarParentesco: function (descripcion, callback) {
        return db.query('INSERT INTO parentesco (descripcion) values (?)', [descripcion], callback);
    },
    eliminarParentesco: function (id, callback) {
        return db.query('DELETE FROM parentesco WHERE id_par=?', [id], callback);
    },
    actualizarParentesco: function (id, descripcion, callback) {
        return db.query('UPDATE parentesco SET descripcion=? WHERE id_par=?', [descripcion, id], callback);
    }
};

module.exports = Parentesco;