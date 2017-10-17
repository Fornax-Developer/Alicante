# Alicante

Información general
    - Sistema de enfermeria Colegio Alicante del Rosal

Créditos
    - Marco Antonio Medina Valdivieso
    - Alejandra Maria Paz Ramirez Cortes
    - Daniela Marisol Sepulveda Gaona
    - Luis Galvarino Córdova Cifuentes
    - Jean Paul Fuentes Tognarelli

Agradecimentos
    - Colegio Alicante del Rosal

Instrucciones de instalación
    - Abrir consola de comandos del sistema
        node server.js

Información de licencia
    - ISC License (ISC)

Errores conocidos, y la manera de informarlos
    -> Error: connect ECONNREFUSED 127.0.0.1:3306
        - No se a iniciado la base de datos de mysql ip 127.0.0.1 con puerto 3306
            Ejemplo: Servidor esta caido o no iniciado
    -> Error: Failed to lookup view (vista Ejemplo pages/contacto)
        - Otro Controller tiene el mismo nombre que otro controller
            Ejemplo: app.get("/", function(req, res) cuando deberia ser /contacto
    -> TypeError: controller.run is not a function
        - Falta inicializar un controlador con module export
            Ejemplo: module.exports = { run: function(app) { GET / POST controller } };
            Ejemplo: Vista no encontrada. views/{Nombre de la vista}, cuando 
                     contacto lleva extension: contacto.ejs
    