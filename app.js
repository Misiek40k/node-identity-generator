const fs = require('fs');

const peaople = [];
const genders = ['male', 'female'];
const maleNames = ['Cody', 'Rex', 'Anakin', 'Maul'];
const femaleNames = ['Padme', 'Leia', 'Shmi', 'Rey'];
const lastNames = ['Amidala', 'Skywalker', 'Palpatine', 'Kenobi']

const randChoice = (arr) => {
    const randIndex = Math.floor(Math.random() * arr.length);
    const randItem = arr[randIndex];
    return randItem;
}