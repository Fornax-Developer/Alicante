module.exports = 
{
    run: function(app)
    {
        app.get("/parentesco", function(req, res)
        {
            res.render("pages/parentesco", { TituloPagina: 'Parentescos' });
        });
    }
};