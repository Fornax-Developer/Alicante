module.exports = 
{
    run: function(app)	
    {
        app.get("/estudiante", function(req, res)
        {
            res.render("pages/estudiante", { TituloPagina: 'Estudiantes' });
        });
    }
};