var db = require('../db/dbconfig');

var Rol = {
    getMaxIdRol: function (callback) {
        return db.query('SELECT MAX(id_rol) AS max_id FROM rol', callback);
    },
    listarRol: function (callback) {
        return db.query('SELECT id_rol, descripcion FROM rol', callback);
    },
    obtenerRolId: function (id, callback) {
        return db.query('SELECT id_rol, descripcion FROM rol WHERE id_rol=?', [id], callback);
    },
    agregarRol: function (descripcion, callback) {
        return db.query('INSERT INTO rol (descripcion) values (?)', [descripcion], callback);
    },
    eliminarRol: function (id, callback) {
        return db.query('DELETE FROM rol WHERE id_rol=?', [id], callback);
    },
    actualizarRol: function (id, descripcion, callback) {
        return db.query('UPDATE rol SET descripcion=? WHERE id_rol=?', [descripcion, id], callback);
    }
};

module.exports = Rol;