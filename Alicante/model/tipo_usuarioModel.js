var db = require('../db/dbconfig');

var TipoUsuario = {
    getMaxIdTipoUsuario: function (callback) {
        return db.query('SELECT MAX(id_tip_usu) AS max_id FROM tipo_usuario', callback);
    },
    listarTipoUsuario: function (callback) {
        return db.query('SELECT id_tip_usu, descripcion FROM tipo_usuario', callback);
    },
    obtenerTipoUsuarioId: function (id, callback) {
        return db.query('SELECT id_tip_usu, descripcion FROM tipo_usuario WHERE id_tip_usu=?', [id], callback);
    },
    agregarTipoUsuario: function (descripcion, callback) {
        return db.query('INSERT INTO tipo_usuario (descripcion) values (?)', [descripcion], callback);
    },
    eliminarTipoUsuario: function (id, callback) {
        return db.query('DELETE FROM tipo_usuario WHERE id_tip_usu=?', [id], callback);
    },
    actualizarTipoUsuario: function (id, descripcion, callback) {
        return db.query('UPDATE tipo_usuario SET descripcion=? WHERE id_tip_usu=?', [descripcion, id], callback);
    }
};

module.exports = TipoUsuario;