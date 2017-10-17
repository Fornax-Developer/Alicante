var db = require('../db/dbconfig');

var Estudiante = {
    getMaxIdEstudiante: function (callback) {
        return db.query('SELECT MAX(id_est) AS max_id FROM estudiante', callback);
    },
    listarEstudiante: function (callback) {
        return db.query('SELECT id_est, sexo, fecha_nac, pasaje, numero, block_dpto, rut_per, id_tip_san, id_cur, id_com FROM estudiante', callback);
    },
    obtenerEstudianteId: function (id, callback) {
        return db.query('SELECT id_est, sexo, fecha_nac, pasaje, numero, block_dpto, rut_per, id_tip_san, id_cur, id_com FROM estudiante WHERE id_est=?', [id], callback);
    },
    agregarEstudiante: function (sexo, fecha_nac, pasaje, numero, block_dpto, rut_per, id_tip_san, id_cur, id_com, callback) {
        return db.query('INSERT INTO estudiante (sexo, fecha_nac, pasaje, numero, block_dpto, rut_per, id_tip_san, id_cur, id_com) values (?,?,?,?,?,?,?,?,?)', [sexo, fecha_nac, pasaje, numero, block_dpto, rut_per, id_tip_san, id_cur, id_com], callback);
    },
    eliminarEstudiante: function (id, callback) {
        return db.query('DELETE FROM estudiante WHERE id_est=?', [id], callback);
    },
    actualizarEstudiante: function (id, sexo, fecha_nac, pasaje, numero, block_dpto, rut_per, id_tip_san, id_cur, id_com, callback) {
        return db.query('UPDATE estudiante SET sexo=? fecha_nac=? pasaje=? numero=? block_dpto=? rut_per=? id_tip_san=? id_cur=? id_com=? WHERE id_cur=?', [sexo, fecha_nac, pasaje, numero, block_dpto, rut_per, id_tip_san, id_cur, id_com, id], callback);
    }
};

module.exports = Estudiante;