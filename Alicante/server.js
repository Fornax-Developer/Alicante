var express = require("express");
var http = require('http');
var path = require('path');
var fs = require("fs");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

var port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.set('Content-type', 'text/plain');

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(session({secret: '51050fe18ee9e076c8ddc0da63660502', //secret_alicante.2017 MD5
    cookie: {
        secure: true
    },
    saveUninitialized: true,
    resave: false
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

fs.readdirSync("./controller").forEach(function (file)
{
    if (file.substr(-3) === ".js")
    {
        let controller = require("./controller/" + file);
        controller.run(app);
    }
});

app.listen(process.env.port || port, function () {
    console.log("http://localhost:" + port);
});

//var Funciones = require('./middleware/funciones');
//var Estdiante = require('./model/estudianteModel');
//Estdiante.agregarEstudiante('M', Funciones.getFechaActual(),'Teniente Sofanor Parra', '2889', '', '190685128', 1, 79, 40 , function (err, rows) {
//    console.log(rows.affectedRows);
//});
//console.log(Funciones.getFechaActual());

//var Funciones = require('./middleware/funciones');
//var Rol = require('./model/rolModel');
//Rol.getMaxIdRol(function (err, rows) {
//    console.log(Funciones.convertRowDataPacket_JSON(rows[0].max_id)); Maximo id
//    console.log(Funciones.convertRowDataPacket_JSON(rows[0]));    Object Rol JSON
//    console.log(Funciones.convertRowDataPacket_JSON(rows[0].id_rol)); Object.id_rol
//    console.log(rows.affectedRows); Agregar, Eliminar, Update = (1 == true) : false = 0 
//});