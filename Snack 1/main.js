'use strict';

function biciLeggera(arrayBiciclette){
    let x = 7000; //il peso massimo stimato per una bici di corsa è impostato a 7kg
    let biciLeggeraId = 0; 
    for(let i = 0 ; i < arrayBiciclette.length ; i++){
        if(arrayBiciclette[i].peso < x){ //se la bici del nostro array è più leggera della nostra stima massima
            x = arrayBiciclette[i].peso;  //la stima massima verrà aggiornata
            biciLeggeraId = i; //e salviamo l'indice della bici che al momento risulta essere la più leggera
        }
    } 
    return biciLeggeraId; //usciti dal ciclo restituiamo al nostro main l'indice della bici più leggera
}

const cicliFiore = [
    {
        brand: "Pinarello",
        peso: 1000
    },
    {
        brand: "Canyon",
        peso: 3000
    },
    
    {
        brand: "Wilier",
        peso: 1000
    },
    {
        brand: "Bianchi",
        peso: 4000
    },
    {
        brand: "Cervelo",
        peso: 500
    }
];
console.log(cicliFiore);
let x = biciLeggera(cicliFiore);
const {brand, peso} = cicliFiore[x]; //distrutturiamo la bici più leggera
console.log(brand, peso);
const markup = `<p> La bici più leggera è la ${brand} con un peso di ${peso}gr</p>`
console.log(markup);
const documentBody = document.querySelector("body");
documentBody.innerHTML = markup;