

let animal1 = "elefante";
let animal2 = "girafa";
let animal3 = "zebra";

// pega parte da string elefante, começando no indice 3 e terminando no 7
let parteanimal1 = animal1.substring(3,7);
console.log("Substring de 3 a 7: ", parteanimal1);

// exemplo de replace
// tranformar girafa em girafe;

let animalnovo = animal2.replace("fa","fe");
console.log("resultado do replace(fa,fe): ", animalnovo);


//exemplo concat
//juntar strings

let animaisjuntos = animal1.concat(" ",animal2," ",animal3);
console.log("resultado do concate com espaços(, animal2...): ", animaisjuntos);

