const fs = require('fs');

const people = [];
const genders = ['male', 'female'];
const maleNames = ['Cody', 'Rex', 'Anakin', 'Maul'];
const femaleNames = ['Padme', 'Leia', 'Shmi', 'Rey'];
const lastNames = ['Amidala', 'Skywalker', 'Palpatine', 'Kenobi']

const randChoice = (arr) => {
    const randIndex = Math.floor(Math.random() * arr.length);
    const randItem = arr[randIndex];
    return randItem;
}

for (let i = 0; i < 20; i++) {
    const randGender = randChoice(genders);
    let name;

    (randGender === 'male')
        ?
        name = randChoice(maleNames)
        :
        name = randChoice(femaleNames);


    const person = {
        gender: randGender,
        firstName: name,
        lastName: randChoice(lastNames),
        age: Math.floor(Math.random() * 61) + 18,
    };

    people.push(person);
};

fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) throw ('Something went wrong: ', err);
    console.log('The file has been saved.');
});