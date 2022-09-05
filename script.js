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
// Collego listnumber a Html
const listnumbers = document.getElementById('Number');

const array = [];
// Creo ciclo while 
while (array.length < 5) {
    
    const numRandom = Math.floor(Math.random() * 100 + 1);

    if (!array.includes(numRandom)) {

        array.push(numRandom);

    }
}

console.log(array);
// inserisco valore array dentro html
listnumbers.innerHTML = array;

const reset = setTimeout(function() {

    listnumbers.innerHTML = '';

}, 3000 );

const userArray = [];

const emptyBox = setTimeout(function() {
// Creo ciclo while numeri utente
while (userArray.length < 5) {     

const userNumbers = parseInt(prompt('Inserisci i numeri che ricordi'));

userArray.push(userNumbers);

}



// Creo condizione per cui utente indovina o sbaglia
for (let i = 0; i < userArray.length; i++) {

if (userArray[i] === array[i]) {
    console.log("Hai indovinato!");
    console.log(`
Numero random ${array[i]}, Numero inserito ${userArray[i]}
            `);
} else {
    console.log("Ritenta!");
    console.log(`
    Numero random ${array[i]}, Numero inserito ${userArray[i]}
    `);

}
}

}, 3500 );

console.log(userArray);
