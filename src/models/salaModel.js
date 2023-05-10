const db = require("./db");
function listarSalas(){
    return db.findAll("salas");
}

module.exports = {listarSalas}

function listarSalas(){
    return[
        {
            "_id":{
                "$oid":"unj4u834879rfui8h34uh7"
            },
            "nome":"Guerreiros da InfoCimol",
            "tipo":"publica"
        },

        {
            "_id":{
                "$oid":"nj54ij458j54unjgerij"
            },
            "nome":"Só os confirmados da INFO",
            "tipo":"privada",
            "chave":"47fyyg6r"
        },

        {
            "_id":{
                "$oid":"32km3r2oikr3290kfroimf4"
            },
            "nome":"Vingadores da Info",
            "tipo":"publica"
        }
    ];
}