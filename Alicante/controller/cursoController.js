module.exports = 
{
    run: function(app)
    {
        app.get("/curso", function(req, res)
        {
            res.render("pages/curso", { TituloPagina: 'Cursos' });
        });
    }
};