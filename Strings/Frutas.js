//Exemplo slice()

let frutas = "maçã, banana, laranja, uva, abacaxi";
console.log("tamanho da string frutas: ", frutas.length);

// versao sliced

let partefrutas = frutas.slice(6,21);
console.log("resultado do slice: ", partefrutas);


// uso do trim 

let frutascomespaco ="           abacate          ";
let frutassemespaco = frutascomespaco.trim();

console.log("Resultado do trim:",frutassemespaco);


// Exemplo do split 

let Listafrutas = "maçã,banana,laranja,uva,abacaxi";

let arraydefrutas = Listafrutas.split(",");
console.log("Resultado do Split:", arraydefrutas);