module.exports = 
{
    run: function(app)
    {
        app.get("/registro_medico", function(req, res)
        {
            res.render("pages/registro_medico", { TituloPagina: 'Registros Medicos' });
        });
    }
};