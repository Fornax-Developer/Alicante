module.exports = 
{
    run: function(app)
    {
        app.get("/tipo_curso", function(req, res)
        {
            res.render("pages/tipo_curso", { TituloPagina: 'Tipos de Cursos' });
        });
    }
};