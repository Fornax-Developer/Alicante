module.exports = 
{
    run: function(app)
    {
        app.get("/preguntas", function(req, res)
        {
            res.render("pages/preguntas", { TituloPagina: 'Preguntas Frecuentes' });
        });
    }
};