var db = require('../db/dbconfig');

var Usuario = {
    getMaxIdUsuario: function (callback) {
        return db.query('SELECT MAX(id_usu) AS max_id FROM usuario', callback);
    },
    listarUsuario: function (callback) {
        return db.query('SELECT id_usu, habilitado, correo, clave, recuperacion, rut_per, id_par, id_tip_usu FROM usuario', callback);
    },
    obtenerUsuarioId: function (id, callback) {
        return db.query('SELECT id_usu, habilitado, correo, clave, recuperacion, rut_per, id_par, id_tip_usu FROM usuario WHERE id_usu=?', [id], callback);
    },
    agregarUsuario: function (habilitado, correo, clave, recuperacion, rut_per, id_par, id_tip_usu, callback) {
        return db.query('INSERT INTO usuario (habilitado, correo, clave, recuperacion, rut_per, id_par, id_tip_usu) values (?,?,?,?,?,?,?)', [habilitado, correo, clave, recuperacion, rut_per, id_par, id_tip_usu], callback);
    },
    eliminarUsuario: function (id, callback) {
        return db.query('DELETE FROM usuario WHERE id_usu=?', [id], callback);
    },
    actualizarUsuario: function (id, habilitado, correo, clave, recuperacion, rut_per, id_par, id_tip_usu, callback) {
        return db.query('UPDATE usuario SET habilitado=? correo=? clave=? recuperacion=? rut_per, id_par=? id_tip_usu=? WHERE id_usu=?', [habilitado, correo, clave, recuperacion, rut_per, id_par, id_tip_usu, id], callback);
    },
    existeUsuario: function (correo, clave, callback) {
        return db.query('SELECT COUNT(*) AS existe FROM usuario WHERE correo =? AND clave =?', [correo, clave], callback);
    },
    buscarUsuario: function (correo, clave, callback) {
        return db.query('SELECT id_usu, habilitado, correo, clave, recuperacion, rut_per, id_par, id_tip_usu FROM usuario correo =? AND clave =?', [correo, clave], callback);
    }
};

module.exports = Usuario;