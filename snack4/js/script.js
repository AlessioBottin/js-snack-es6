// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo un array di squadre con nome e pti e falli a 0
const teamsArray = [
    {
        nome: 'Juve',
        pti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        pti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        pti: 0,
        falli: 0
    },
    {
        nome: 'Napoli',
        pti: 0,
        falli: 0
    }
];

// Creo un nuovo array 
const teamsFoulArray = [];

// Per ogni squadra nell' array genero un numero random per i pti e i falli subiti
for (i = 0; i < teamsArray.length; i++) {
    let thisTeam = teamsArray[i];

    thisTeam.pti = getRndInteger(0, 120);
    thisTeam.falli = getRndInteger(0, 500);

    console.log(thisTeam);

    // Destrutturo ogni object del vecchio array
    const {nome, falli} = thisTeam;
    const newTeam = {
        nome,
        falli
    };

    // Pusho ogni nuovo object nel nuovo array 
    teamsFoulArray.push(newTeam);

}

console.log(teamsFoulArray);







// FUNCTIONS 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}