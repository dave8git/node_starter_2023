const os = require('os');
const fs = require('fs');
// console.log(os);

// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());

const genders = ["M","F"];
const maleNames = ["Henryk", "Michał", "Dawid", "Grzegorz", "Maciek", "Robert", "Tomek", "Artur", "Krzysiek", "Łukasz", "Mirek", "Leszek", "Władysław", "Filip", "Hubert", "Zenon"];
const femaleNames = ["Aleksandra", "Barbara", "Ewa", "Anna", "Zofia", "Zoja", "Żanna", "Kinga", "Kunegunda", "Katarzyna", "Joanna", "Patrycja", "Beata", "Żaneta"];
const lastNames = ["Pawłowski", "Krzesiński", "Rebiński", "Michubczyki", "Rojewski", "Kluborski", "Lewandowski", "Litwiński"];
const people = [];

const randChoice = (arr) => {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

for (let i = 0; i < 20; i++) {
    const person = {
        gender: randChoice(genders),
        firstName: randChoice(maleNames), 
        lastNames: randChoice(femaleNames), 
        age: Math.floor(Math.random() * 78) + 18,
    }

    people.push(person);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});