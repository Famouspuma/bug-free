
module.exports = function (sequelize, DataTypes){
    const alias = 'Resena';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pelicula_id: {
            type: dataTypes.INTEGER,

        },
        usuario_id: {
            type: dataTypes.INTEGER,

        },
        texto_resena: {
            type: dataTypes.STRING,
        },
        puntaje: {
            type: dataTypes.DECIMAL,
        },
        fecha_creacion:{
            type: dataTypes.DATE,

        },
        fecha_actualizacion:{
            type: dataTypes.DATE,

        },       
    };
    
    const config = {
        timestamps: false
    };
    const Resena = sequelize.define(alias, cols, config);    

 return Resena;

}