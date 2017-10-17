var db = require('../db/dbconfig');

var Contacto = {
    getMaxIdContacto: function (callback) {
        return db.query('SELECT MAX(id_con) AS max_id FROM contacto', callback);
    },
    listarContacto: function (callback) {
        return db.query('SELECT id_con, telefono_celular, telefono_hogar, correo, rut_per, id_par, id_est FROM contacto', callback);
    },
    obtenerContactoId: function (id, callback) {
        return db.query('SELECT id_con, telefono_celular, telefono_hogar, correo, rut_per, id_par, id_est FROM contacto WHERE id_con=?', [id], callback);
    },
    agregarContacto: function (telefono_celular, telefono_hogar, correo, rut_per, id_par, id_est, callback) {
        return db.query('INSERT INTO contacto (telefono_celular, telefono_hogar, correo, rut_per, id_par, id_est) values (?,?,?,?,?,?)', [telefono_celular, telefono_hogar, correo, rut_per, id_par, id_est], callback);
    },
    eliminarContacto: function (id, callback) {
        return db.query('DELETE FROM contacto WHERE id_con=?', [id], callback);
    },
    actualizarContacto: function (id, telefono_celular, telefono_hogar, correo, rut_per, id_par, id_est, callback) {
        return db.query('UPDATE contacto SET telefono_celular=? telefono_hogar=? correo=? rut_per=? id_par=? id_est=? WHERE id_con=?', [telefono_celular, telefono_hogar, correo, rut_per, id_par, id_est, id], callback);
    }
};

module.exports = Contacto;