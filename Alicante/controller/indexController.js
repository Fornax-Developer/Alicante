module.exports = 
{
    run: function(app)
    {
        app.get("/", function(req, res)
        {
            res.render("pages/index", { TituloPagina: 'Inicio' });
        });
        
        app.get("/funcionario", function(req, res)
        {
            res.render("pages/login", { TituloPagina: 'Login - Funcionario' });
        });
        
        app.get("/apoderado", function(req, res)
        {
            res.render("pages/login", { TituloPagina: 'Login - Apoderado' });
        });
    }
};