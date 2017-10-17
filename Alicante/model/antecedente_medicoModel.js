var db = require('../db/dbconfig');

var AntecedenteMedico = {
    getMaxIdAntecedenteMedico: function (callback) {
        return db.query('SELECT MAX(id_ant_med) AS max_id FROM antecedente_medico', callback);
    },
    listarAntecedenteMedico: function (callback) {
        return db.query('SELECT id_ant_med, enfermedad, medicamento, tratamiento, alergia, vacunas, fecha_reg, fecha_update, id_est FROM antecedente_medico', callback);
    },
    obtenerAntecedenteMedicoId: function (id, callback) {
        return db.query('SELECT id_ant_med, enfermedad, medicamento, tratamiento, alergia, vacunas, fecha_reg, fecha_update, id_est FROM antecedente_medico WHERE id_ant_med=?', [id], callback);
    },
    agregarAntecedenteMedico: function (enfermedad, medicamento, tratamiento, alergia, vacunas, fecha_reg, fecha_update, id_est, callback) {
        return db.query('INSERT INTO antecedente_medico (enfermedad, medicamento, tratamiento, alergia, vacunas, fecha_reg, fecha_update, id_est) values (?,?,?,?,?,?,?,?)', [enfermedad, medicamento, tratamiento, alergia, vacunas, fecha_reg, fecha_update, id_est], callback);
    },
    eliminarAntecedenteMedico: function (id, callback) {
        return db.query('DELETE FROM antecedente_medico WHERE id_ant_med=?', [id], callback);
    },
    actualizarAntecedenteMedico: function (id, enfermedad, medicamento, tratamiento, alergia, vacunas, fecha_reg, fecha_update, id_est, callback) {
        return db.query('UPDATE antecedente_medico SET enfermedad=? medicamento=? tratamiento=? alergia=? vacunas=? fecha_reg=? fecha_update=? id_est=? WHERE id_ant_med=?', [enfermedad, medicamento, tratamiento, alergia, vacunas, fecha_reg, fecha_update, id_est, id], callback);
    }
};

module.exports = AntecedenteMedico;