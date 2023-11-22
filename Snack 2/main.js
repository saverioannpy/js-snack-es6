'use strict';

const arraySquadre = [
    {
        nome: "Napoli",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Salernitana",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Palmese",
        punti: 0,
        falliSubiti: 0
    }
];

for(let i = 0 ; i < arraySquadre.length ; i++){
    arraySquadre[i].punti = Math.floor(Math.random() * 101);
    arraySquadre[i].falliSubiti = Math.floor(Math.random() * 101);
    console.log("Nome: " + arraySquadre[i].nome + "\nPunti: " + arraySquadre[i].punti + "\nFalli subiti: " + arraySquadre[i].falliSubiti);
}
const nuovoArraySquadre = [];
for(let i = 0 ; i < arraySquadre.length ; i++){
    const {nome, falliSubiti} = arraySquadre[i];
    nuovoArraySquadre.push({nome: nome, falliSubiti: falliSubiti});
}
console.log(nuovoArraySquadre);


