let num1 = 20; //number
let num2 = "20"; //string

let num3 = 33.3;
let num4 = 0.4567;
let num5 = -4;

//Operadores aritmeticos
let resultado;

resultado = num1 + num3;
resultado = num1 - num3;
resultado = num3 * num3;
resultado = num1 / num3;

//modulo -> resto
resultado = 20 % 10; // devuelve el resto de 20 / 10

//(Libería) Objeto Math
resultado = Math.PI;
resultado = Math.round(2.5);//redondea al más cercano
resultado = Math.ceil(2.2);//redondea hacia arriba
resultado = Math.floor(2.8);//redondea hacia abajo

resultado = Math.min(3, 5, 10, -1, 7);
resultado = Math.max(3, 5, 10, -1, 7);

resultado = Math.random();
//Generar un numero aleatorio dentro de un rango de 1 a 6
resultado = Math.floor(Math.random() * 6) + 1;//Genera un número entre 0 y 6 y lo redondea hacia abajo

//Precedéncia de operadores
resultado = 20 + 30 * 6; //200
resultado = (20 + 30) * 6; //300

resultado = 20 + 34 + 56 + 5; //115
resultado = resultado * 0.2;

//Incremento y decremento
let clicks = 5;
clicks = clicks + 1;
clicks++;
++clicks;

clicks--;
--clicks;

let total = 0;
// total = total + 3;
total += 3;
total -= 4;
total *= 100;
// total = total / 2;
total /= 2;

//El += se puede usar en strings
let saludo = "Hola ";
saludo += "que tal";

//Funciones para convertir strings a number
const n1 = "20.7";
const n2 = "34€";
const n3 = "uno";
const n4 = 12;

console.log(typeof +n1);//Nos informa del tipo de dato
console.log(parseInt(n1));//Convierte a entero
console.log(parseInt(n2));//Convierte a entero
console.log(parseFloat(n1));//Convierte a decimal
console.log(Number.parseFloat(n3));//Convierte a decimal

console.log("Nos informa si es un número entero=> " + Number.isInteger(n1));//Nos informa si es un número entero

console.log("Revisar si el cambio a numero ha ido bién");
console.log(n3);
console.log(parseInt(n3));
console.log(Number.parseInt(n3));
console.log(Number.isNaN(Number.parseInt(n3)));

// window.alert("hola");
