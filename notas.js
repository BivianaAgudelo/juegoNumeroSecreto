/*
    Crear una función que muestre "¡Hola, mundo!" en la consola.
*/

function saludo() {
    console.log('¡Hola, mundo!');
}

saludo();


/*
    Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/

ffunction mostarNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

mostarNombre('Benja');

/*
    Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/

function numero(a) {
    return a;
}

let resultado = numero(5 * 2)
console.log(resultado);


/*
    Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/

function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let promedio = calcularPromedio(4, 7, 10);
  console.log(promedio);


/*
    Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
*/

function numeroMayor(a, b) {
    if(a > b) {
        return a;
    }else {
        return b;
    }
}

let mostrarNumeroMayor = numeroMayor(1, 5)
console.log(mostrarNumeroMayor);

/*
    Crear una función que reciba un número como parámetro y devuelva el 
    resultado de multiplicar ese número por sí mismo.
*/

function multiplicar(a) {
    return a * a;
}

let multiplicacion = multiplicar(2)
console.log(multiplicacion);
