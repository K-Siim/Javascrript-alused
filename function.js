/**
 * Functions
 * Funktsioone kasutame korduvate tegevuste automiseerimiseks
 * Funksioon võtab sulgude vahele parameetrid. (placeholders)
 * keyword
 */
function sum(num1, num2) {
    return num1 + num2;
}


/**
 * IIFE - funktsioon, mis kutsutakse automaatselt välja
 * 
 */
(() => {
    console.log("IIFE")
})();

((num1, num2) => {
    console.log("IIFE")
})();

/**
 * Arrow Functions
 * 
 */

const fullName = (firstName, lastName) => {
    //return firstName + ' ' + lastName;
    return `${firstName} ${lastName} `;
}

console.log(fullName("Kevin", "Siim"));


