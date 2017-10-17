module.exports = 
{
    run: function(app)
    {
        app.get("/ayuda", function(req, res)
        {
            res.render("pages/ayuda", { TituloPagina: 'Ayuda' });
        });
    }
};