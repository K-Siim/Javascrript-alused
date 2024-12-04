/**
 * OBJECTS
 * Objekti tähistab ( koodiploki märgend)
 * 
 * Objekt on asi, millel on iseloomulikud tunnused
 * Objekt koosneb key:value
 * Objekti seest saame väärtust välja kutsuda kasutades punkti ning keyd.
 * 
 */


const something = [1, 2, 3, 4];

const car = {
    brand:"Kia,",
    model:"Proceed",
    year: 2024, 
    isElectric: false, 
    drive: function() {
        console.log("Drive please!")
    }
};


console.log(car.year);

const porche = new car("Porche", "Cayanne");


console.log("Porche".toUpperCase());
console.log(car.drive());


/*
typeof operant
Annab teada, mis andmetüüp on muutuja sisse salvestatud



*/

const harrypotter = 4;
console.log(typeof harrypotter)