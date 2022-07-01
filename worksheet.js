const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        heights: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
let names = characters.map(character => character.name)
//2. Get array of all heights
let heights = characters.map(character => character.height)
//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map(character => {
    return ({name: character.name, height: character.height})
})
//4. Get array of all first names
let firstNames = characters.map(character => character.name.split(' ')[0])

//***REDUCE***
//1. Get total mass of all characters
let totalMass = characters.reduce((acc, character) => acc + character.mass, 0)
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, character) => acc + character.height, 0)
//3. Get total number of characters by eye color
const totalEyeLength = characters.reduce((acc, character) => acc + character.eye_color.length, 0)
//4. Get total number of characters in all the character names
const totalNamesLength = characters.reduce((acc, character) => acc + character.name.length, 0)


//***FILTER***
//1. Get characters with mass greater than 100
let char2 = characters.filter((character) => character.mass > 100);
//2. Get characters with height less than 200
let char3 = characters.filter((character) => character.height > 200);
//3. Get all male characters
const maleCharacters = characters.filter((character) => character.gender == 'male');
console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter((character) => character.gender == 'female');
console.log('Female characters: ' + femaleCharacters);

//***SORT***
//1. Sort by mass
characters.sort((a,b) => a.mass - b.mass)
console.log(...characters);
//2. Sort by height
characters.sort((a,b) => a.height - b.height)
//3. Sort by name
characters.sort((a,b) => a.name < b.name ? -1 : 1)
console.log(...characters);
//4. Sort by gender
characters.sort((a,b) => a.gender < b.gender ? -1 : 1)

//***EVERY***
//1. Does every character have blue eyes?
console.log('Does every character have blue eyes? ' + characters.every(character => character.eye_color == 'blue'))
//2. Does every character have mass more than 40?
console.log('Does every character have mass more than 40? ' + characters.every(character => character.mass > 40))
//3. Is every character shorter than 200?
console.log('Is every character shorter than 200? ' + characters.every(character => character.height < 200))
//4. Is every character male?
console.log('Is every character male? ' + characters.every(character => character.gender == 'male'))

//***SOME***
//1. Is there at least one male character?
console.log('Is there at least one male character? ' + characters.some(character => character.gender == 'male'))
//2. Is there at least one character with blue eyes?
console.log('Is there at least one character with blue eyes? ' + characters.some(character => character.eye_color == 'blue'))
//3. Is there at least one character taller than 210?
console.log('Is there at least one character taller than 210?' + characters.some(character => character.height > 210))
//4. Is there at least one character that has mass less than 50?
console.log('Is there at least one character that has mass less than 50' + characters.some(character => character.mass < 50))
