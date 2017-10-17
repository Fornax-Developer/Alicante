var db = require('../db/dbconfig');

var TipoSangre = {
    getMaxIdTipoSangre: function (callback) {
        return db.query('SELECT MAX(id_tip_san) AS max_id FROM tipo_sangre', callback);
    },
    listarTipoSangre: function (callback) {
        return db.query('SELECT id_tip_san, descripcion FROM tipo_sangre', callback);
    },
    obtenerTipoSangreId: function (id, callback) {
        return db.query('SELECT id_tip_san, descripcion FROM tipo_sangre WHERE id_tip_san=?', [id], callback);
    },
    agregarTipoSangre: function (descripcion, callback) {
        return db.query('INSERT INTO tipo_sangre (descripcion) values (?)', [descripcion], callback);
    },
    eliminarTipoSangre: function (id, callback) {
        return db.query('DELETE FROM tipo_sangre WHERE id_tip_san=?', [id], callback);
    },
    actualizarTipoSangre: function (id, descripcion, callback) {
        return db.query('UPDATE tipo_sangre SET descripcion=? WHERE id_tip_san=?', [descripcion, id], callback);
    }
};

module.exports = TipoSangre;