
//definindo constantes

const a = true;
const b = false;

//usando o E
const resultado1 = a && b; //false
const resultado2 = a && true; //true

console.log (`A (true) && B(false): ${resultado1}`) //false
console.log (`A (true) && true: ${resultado2}`) //true
console.log ("\n")

//usando o OU
const resultado3 = a || b; //true
const resultado4 = a || false; //true
const resultado5 = b || true; //true
const resultado6 = false || false; //false


console.log (`A (true) || B (false): ${resultado3}`) //false
console.log (`A (true) || false: ${resultado4}`) //true
console.log (`B (true) || B (false): ${resultado5}`) //true
console.log (`False || false: ${resultado6}`) //false
console.log ("\n")

//usando o NÃO
const resultado7 = !a; //false
const resultado8 = !b || false; //true

console.log (`! A (true) : ${resultado7}`) //false
console.log (`! B (false): ${resultado8}`) //true
console.log ("\n")


