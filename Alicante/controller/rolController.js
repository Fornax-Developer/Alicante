var Rol = require('../model/rolModel');

module.exports = 
{
    run: function(app)
    {
        app.get("/roles", function(req, res)
        {
            var roles = [];
            Rol.listarRoles(function (err, rows){
                var string = JSON.stringify(rows);
                var parse = JSON.parse(string);
                
                for (var i = 0; i < parse.length; i++) {
                    roles.push(parse[i]);
                }
            });
            //roles = roles.replace("RowDataPacket", "");
            //console.log(roles);
            res.render("pages/rol", { TituloPagina: 'Roles', ListarRoles: roles });
        });
    }
};