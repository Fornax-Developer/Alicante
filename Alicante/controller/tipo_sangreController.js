module.exports = 
{
    run: function(app)
    {
        app.get("/tipo_sangre", function(req, res)
        {
            res.render("pages/tipo_sangre", { TituloPagina: 'Tipos de Sangre' });
        });
    }
};