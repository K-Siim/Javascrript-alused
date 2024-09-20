// Global Scope
const teacherName = "Karl Rauniste";

// Data Types
// String => "See in stringi väärtus", 'See on ka stringi väärtus', `see on ka strng väärtus` 
// Number (Int, Float) => 42
// Boolean => True/False, Jah/ei, 1/0
// Array => []
// Object => {}
    // const isMate = false

    // Muutujad - nimetus ja väärtus (NB: Muutumatu vs Muudetav)
    // Muutujate nimetus on camelCase and it makes some sense
    const fruit = "Banaan"; // Muutuja mida ei saa enam muuta
let model ="BMW";  // Muutuja, mida saab veel muuta
// snake_Case
// snakeCase

// Koodiblokk ==> Scope
// Koodiblokki tähistab {} sÜmbol (Objekti sÜmbol)
// Function Scope
const calculateSum = (number1, number2) => {
    const number3 = 256;
    //  console.log(teacherName);
    return number1 + number2;
};


calculateSum(1, 2);

// Type casting
// Muudame ymber andmetyybi string andmetyybiks
const castNumber = "123456";
console.log(typeof Number(castNumber));
// console.log(Boolean(castNumber));

// Array => symbol on [] toimub indekseerimine, esimene element on kohal 0

const characters = ["T", "P", "I", "C", "S", "V", "A", "J", "R"]
// console.log(characters[7]);
// console.log(characters[6]);
// console.log(characters[5]);
// console.log(characters[6]);
// console.log(characters[4]);
// console.log(characters[3]);
// console.log(characters[8]);
// console.log(characters[2]);
// console.log(characters[1]);
// console.log(characters[0]);
// Loopimine => KordusLause, Igast array elemendist minnnakse yle ning käiakse läbi script
// For Loop

for(i = 0; i < characters.length; i++){
    console.log("For Loop: ", characters[i]);
}



// forEach loop - magustoit
characters.forEach((char) => {
    console.log("For Each Loop: ", char);
});












