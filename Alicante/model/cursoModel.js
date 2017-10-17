var db = require('../db/dbconfig');

var Curso = {
    getMaxIdCurso: function (callback) {
        return db.query('SELECT MAX(id_cur) AS max_id FROM curso', callback);
    },
    listarCurso: function (callback) {
        return db.query('SELECT id_cur, nombre, id_tip_cur FROM curso', callback);
    },
    obtenerCursoId: function (id, callback) {
        return db.query('SELECT id_cur, nombre, id_tip_cur FROM curso WHERE id_cur=?', [id], callback);
    },
    agregarCurso: function (nombre, id_tip_cur, callback) {
        return db.query('INSERT INTO curso (nombre, id_tip_cur) values (?,?)', [nombre, id_tip_cur], callback);
    },
    eliminarCurso: function (id, callback) {
        return db.query('DELETE FROM curso WHERE id_cur=?', [id], callback);
    },
    actualizarCurso: function (id, nombre, id_tip_cur, callback) {
        return db.query('UPDATE curso SET nombre=? id_tip_cur=? WHERE id_cur=?', [nombre, id_tip_cur, id], callback);
    }
};

module.exports = Curso;