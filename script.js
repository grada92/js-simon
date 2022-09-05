/*Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire,
uno alla volta, i numeri che ha visto 
precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri 
da indovinare sono stati individuati.
*/

console.log('JS OK')

const listnumbers = document.getElementById('Number');

const array = [];

while (array.length < 5) {
    
    const numRandom = Math.floor(Math.random() * 100 + 1);

    if (!array.includes(numRandom)) {

        array.push(numRandom);

    }
}

console.log(array);

listnumbers.innerHTML = array;

const reset = setTimeout(function() {

    listaNumeri.innerHTML = '';

}, 3000 );