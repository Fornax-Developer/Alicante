var db = require('../db/dbconfig');

var RegistroMedico = {
    getMaxIdRegistroMedico: function (callback) {
        return db.query('SELECT MAX(id_reg_med) AS max_id FROM registro_medico', callback);
    },
    listarRegistroMedico: function (callback) {
        return db.query('SELECT id_reg_med, descripcion, observaciones, sugerencias, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, rut_trajo, fecha_reg, hora_llegada, hora_salida, id_rol, id_est, id_usu FROM registro_medico', callback);
    },
    obtenerRegistroMedicoId: function (id, callback) {
        return db.query('SELECT id_reg_med, descripcion, observaciones, sugerencias, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, rut_trajo, fecha_reg, hora_llegada, hora_salida, id_rol, id_est, id_usu FROM registro_medico WHERE id_reg_med=?', [id], callback);
    },
    agregarRegistroMedico: function (descripcion, observaciones, sugerencias, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, rut_trajo, fecha_reg, hora_llegada, hora_salida, id_rol, id_est, id_usu, callback) {
        return db.query('INSERT INTO registro_medico (descripcion, observaciones, sugerencias, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, rut_trajo, fecha_reg, hora_llegada, hora_salida, id_rol, id_est, id_usu) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [descripcion, observaciones, sugerencias, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, rut_trajo, fecha_reg, hora_llegada, hora_salida, id_rol, id_est, id_usu], callback);
    },
    eliminarRegistroMedico: function (id, callback) {
        return db.query('DELETE FROM registro_medico WHERE id_reg_med=?', [id], callback);
    },
    actualizarRegistroMedico: function (id, descripcion, observaciones, sugerencias, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, rut_trajo, fecha_reg, hora_llegada, hora_salida, id_rol, id_est, id_usu, callback) {
        return db.query('UPDATE registro_medico SET descripcion=? observaciones=? sugerencias=? primer_nombre=? segundo_nombre=? apellido_paterno=? apellido_materno=? rut_trajo=? fecha_reg=? hora_llegada=? hora_salida=? id_rol=? id_est=? id_usu=? WHERE id_reg_med=?', [descripcion, observaciones, sugerencias, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, rut_trajo, fecha_reg, hora_llegada, hora_salida, id_rol, id_est, id_usu, id], callback);
    }
};

module.exports = RegistroMedico;