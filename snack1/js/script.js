// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

const bikesArray = [
    {
        nome: 'trek',
        peso: 20
    },
    {
        nome: 'scott',
        peso: 18
    },
    {
        nome: 'marin',
        peso: 25
    },
];

// Scorro tutti gli oggetti dell array e per ogni oggetto comparo il peso salando quello minore 
let lighterBike = bikesArray[0];
const {peso} = lighterBike;

for (i = 0; i < bikesArray.length; i++) {
    let thisBike = bikesArray[i];  

    if ( thisBike.peso < peso) {
        lighterBike = thisBike;
    }
}

const {nome} = lighterBike;
bikeContainer = document.getElementById('bike-container');

newBike = `
<h1>${nome}</h1>
`;

bikeContainer.innerHTML = newBike;