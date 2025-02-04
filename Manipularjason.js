//exemplo: Manipular dados JSON

// objeto json inicial

let pessoa = {
    "nome": "Matheus Cardoso",
    "Idade": 25,
    "Endereco": {
        "Rua": "Rua M5",
        "Numero": 1010
    },
    "Telefones": ["19 98158-6812","19 3536-2934"]
};

//monstrando o JSON
console.log(pessoa);

//acessando dados

console.log("\nAcessar Dados:\n");

console.log("Nome: ",pessoa.nome);
console.log("Telefone: ",pessoa["Telefones"][0]);
console.log("Endereço: ",pessoa["Endereco"].Rua,", N°: ",pessoa["Endereco"].Numero);
console.log("Idade: ", pessoa.Idade, "Anos.\n");




//adicionando dados
console.log("\nAdicionar Dados:\n");
pessoa.email = "Matheus2cardoso@icloud.com";
pessoa.sobrenome = "Cardoso";
console.log(pessoa,"\n");
//modificando dados
console.log("\nModificar Dados:");
pessoa.Idade = 26;
console.log(pessoa,"\n");
//removendo dados
console.log("\nRemover Dados:");
delete pessoa.sobrenome;
console.log(pessoa,"\n");
//operando com arrays
console.log("\nOperações com Arrays:\n");
pessoa.hobbies = ["nadar","surfar"];
console.log(pessoa,"\n");
pessoa.hobbies.push("Viajar");
console.log(pessoa,"\n");
//Iterando sobre as propriedades do objeto
console.log("\nIterar sobre as propriedades do Objeto:\n");
for(let chave in pessoa){
    console.log(chave + ":" + pessoa[chave]);
}
//convertendo de JSON
console.log("\nConverter de e para JSON:");
let jsontexto =  JSON.stringify(pessoa);
console.log("json convertindo em string: ",jsontexto,"\n");
//convertendo para JSON - só usar o PARSE

let JSONPESSOA = JSON.parse(jsontexto);
console.log("JSON convertido novamente:\n",JSONPESSOA);

