const db = require('../database/models');

// Registracion del usuario

let registracion = {
    
        crearUsuario: function(req,res) {
            db.Usuarios
            .findAll()
            .then(function(usuarios){
                return res.render("registracion", {
                    
                })
            })      
        },  
        guardarUsuario: function (req, res) {
            db.Usuarios.create({
                nombre_usuario: req.body.username,
                email: req.body.email,
                password: req.body.psw,
                fecha_nacimiento: req.body.birthday,
            })
            .then(function(parametro){
                res.redirect("/");
            })
            
        }
        
};


   
module.exports = registracion; 