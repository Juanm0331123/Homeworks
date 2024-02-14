/**
 * Create a new function in Regular and Arrow types, 
 * which should receive a number and will peint in 
 * console if that number amd will print in console 
 * if that numbers is either odd or even
*/

function verificarParidadRegular(num) {
    if (num % 2 === 0) {
        console.log(num + ' es par');
    } else {
        console.log(num + ' es impar');
    }
}


const verificarParidad_Arrow = num => {
    if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} es impar`);
    }
}

verificarParidadRegular(2);

verificarParidad_Arrow(1);