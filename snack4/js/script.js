// Snack 2
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe.
//  Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

const targheArray = students.map((element) => {
    // console.log(element.name);
    return element.name.toUpperCase();
});

console.log(targheArray);

const studentsOver70 = students.filter((element) => {
    return element.grades > 70;
});

console.log(studentsOver70);

const students70and120 = students.filter((element) => {
    return element.grades > 70 && element.id > 120;
});

console.log(students70and120);