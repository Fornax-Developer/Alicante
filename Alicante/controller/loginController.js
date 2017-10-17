module.exports = 
{
    run: function(app)
    {
        app.get("/login", function(req, res)
        {
            res.render("pages/login", { TituloPagina: 'Iniciar Sesión' });
        });
        
        app.post("/validar", function(req, res)
        {
            res.render("/", { TituloPagina: 'Inicio' });
        });
        
        app.get("/perfil", function(req, res)
        {
            res.render("pages/perfil", { TituloPagina: 'Perfil' });
        });
        
        app.get("/logout", function(req, res)
        {
            res.render("pages/index", { TituloPagina: 'Inicio' });
        });
        
        app.get("/recuperar", function(req, res)
        {
            res.render("pages/recuperar", { TituloPagina: 'Recuperar cuenta' });
        });
        
        app.get("/registrarse", function(req, res)
        {
            res.render("pages/registrarse", { TituloPagina: 'Registrarse' });
        });
    }
};