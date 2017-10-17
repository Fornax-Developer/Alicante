module.exports = 
{
    PageAuthorization : function(page, req)
    {
        let permissions = req.session.permissions;
        if(permissions !== undefined){            
            let names = [];
            permissions.forEach(function(page) {
                names.push(page.name);
            });
            return(names.indexOf(page) !== -1);
        }
        return false;
    }
};