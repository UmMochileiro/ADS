//criando arrays

let array1 = [];
let array2 = new Array();
let array3 = ["maçã","laranja","pera"];
console.log(`array 1:`, array1);
console.log(`array 2:`, array2);
console.log(`array 3:`, array3);

//adicionando elementos no array vazio

array1.push("teste 1");
array2.push("teste 2");
array3.push("teste 3");
console.log(`\n array 1:`, array1);
console.log(`\n array 2:`, array2);
console.log(`\n array 3:`, array3);


array3[3] = "loucura"
console.log(`\n array 3:`, array3);

array3.shift();
console.log(`\n array 3:`, array3);

ultimoelemento = array3.pop();
console.log(`\n ultimo elemento:`, ultimoelemento);

primeiroelemento = array3.shift();
console.log(`\n primeiro elemento:`, primeiroelemento);

