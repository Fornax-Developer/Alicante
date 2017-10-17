module.exports = 
{
    run: function(app)
    {
        app.get("/terminos", function(req, res)
        {
            res.render("pages/terminos", { TituloPagina: 'Terminos' });
        });
    }
};