var db = require('../db/dbconfig');

var TipoCurso = {
    getMaxIdTipoCurso: function (callback) {
        return db.query('SELECT MAX(id_tip_cur) AS max_id FROM tipo_curso', callback);
    },
    listarTipoCurso: function (callback) {
        return db.query('SELECT id_tip_cur, descripcion FROM tipo_curso', callback);
    },
    obtenerTipoCursoId: function (id, callback) {
        return db.query('SELECT id_tip_cur, descripcion FROM tipo_curso WHERE id_tip_cur=?', [id], callback);
    },
    agregarTipoCurso: function (descripcion, callback) {
        return db.query('INSERT INTO tipo_curso (descripcion) values (?)', [descripcion], callback);
    },
    eliminarTipoCurso: function (id, callback) {
        return db.query('DELETE FROM tipo_curso WHERE id_tip_cur=?', [id], callback);
    },
    actualizarTipoCurso: function (id, descripcion, callback) {
        return db.query('UPDATE tipo_curso SET descripcion=? WHERE id_tip_cur=?', [descripcion, id], callback);
    }
};

module.exports = TipoCurso;