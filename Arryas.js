// Coding by: Juan Miguel León Gómez - Estructura de datos y algoritmos 2

// Funciones en Javascript para los arrays

const numbers = [1, 2, 3, 4, 5];

// 1. map(): Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array original.

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10] No modifica el array original, crea uno nuevo con los resultados
console.log("--------------------------------")

// 2. filter(): Crea un nuevo array con los elementos que cumplan una función proporcionada en cada elemento del array original.

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4] Son divisibles entre 2
console.log("--------------------------------")

// 3. reduce(): Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

const sum = numbers.reduce((x, y) => x + y);
console.log(sum); // Output: 15
console.log("--------------------------------")

// 4. forEach(): Aplica una función a todo el array original.

numbers.forEach(num => console.log(num ** 2)); // Output: 1, 4, 9, 16, 25
console.log("--------------------------------")

// 5. every(): Comprueba si todos los elementos de un array cumplen con una condición

const result = numbers.every(x => x != 6)
console.log(result) // Output: True
console.log("--------------------------------")

// 6. some(): Comprueba si alguno de los elementos de un array cumplen con una condición

const result2 = numbers.some(x => x != 6)
console.log(result2) // Output: True
console.log("--------------------------------")

// 7. find(): Función que devuelve el primer elemento de un array que cumpla con una función proporcionada. 

const result3 = numbers.find(x => x == 3);
console.log(result3) // Output: 3
console.log("--------------------------------")

// 8. findIndex(): Función que devuelve el índice del primer elemento de un array que cumpla con una función proporcionada.

const result4 = numbers.findIndex(x => x == 3);
console.log(result4) // Output: 2
console.log("--------------------------------")
