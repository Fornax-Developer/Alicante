module.exports = 
{
    run: function(app)
    {
        app.get("/contacto", function(req, res)
        {
            res.render("pages/contacto", { TituloPagina: 'Contacto' });
        });
        
        app.post("/enviar_correo", function(req, res)
        {
            var nombre = req.body.full_name;
            var email = req.body.email;
            var telefono = req.body.telefono;
            var mensaje = req.body.mensaje;
            
            res.render("pages/contacto", { TituloPagina: 'Contacto' });
        });
    }
};