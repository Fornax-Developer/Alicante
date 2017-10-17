var Funciones = {
    convertRowDataPacket_JSON: function (objeto_lista) {
        var string = JSON.stringify(objeto_lista);
        var json = JSON.parse(string);
        return json;
    },
    convertFecha_Database: function (dia, mes, anio) {
        return ("" + anio + "/" + mes + "/" + dia + "");
    },
    getFechaActual: function () {
        var hoy = new Date();
        return ("" + hoy.getFullYear() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getDay() + "");
    }
};

module.exports = Funciones;