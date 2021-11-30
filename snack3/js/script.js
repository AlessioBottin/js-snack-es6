// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

newArray = [],

myArray.forEach((element, index, array) => {
    // (index > 2 && index < 4) ? newArray.push(element) : null;            senza ": null;" NON FUNZIONA L' OPERATORE TERNARIO FUNZIONA SOLO COME UNA IF ELSE

    if ( index > 2 && index < 4) {
        newArray.push(element);
    }
});

// const newArray = myArray.filter((element) => {
//     return index > 2 && index < 4;
// });

console.log(newArray);