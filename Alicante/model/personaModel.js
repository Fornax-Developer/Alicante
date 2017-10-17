var db = require('../db/dbconfig');

var Persona = {
    listarPersona: function (callback) {
        return db.query('SELECT rut_per, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno FROM persona', callback);
    },
    obtenerPersonaRut: function (rut, callback) {
        return db.query('SELECT rut_per, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno FROM persona WHERE rut_per=?', [rut], callback);
    },
    agregarPersona: function (rut_per, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, callback) {
        return db.query('INSERT INTO persona (rut_per, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno) values (?,?,?,?,?)', [rut_per, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno], callback);
    },
    eliminarPersona: function (rut, callback) {
        return db.query('DELETE FROM persona WHERE rut_per=?', [rut], callback);
    },
    actualizarPersona: function (rut, primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, callback) {
        return db.query('UPDATE persona SET primer_nombre=? segundo_nombre=? apellido_paterno=? apellido_materno=? WHERE rut_per=?', [primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, rut], callback);
    }
};

module.exports = Persona;