
function VerificarStatusCasa(casa){
    return new Promise((resolve, reject) => {
   
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;
            if(sucesso){
                resolve(`A casa está localizada em ${casa._endereco} e está disponível para venda`);
            }else{
                reject(`A casa está localizada em ${casa._endereco} e NÃO está disponível para venda`);
            }
        }, 2000);
    });
    
}



class Imovel{
    constructor(endereco,tamanho){
        this._endereco = endereco;
        this._tamanho = tamanho;  
    }
    descrever(){
        throw new Error("Esse Método deve ser implementado por subclasses");
    }
    validar(){
        if(!this._endereco || !this._tamanho){
            throw new Error("Dados Inválidos para o Imóvel"); 
        }
    }
}

class Casa extends Imovel{
    constructor(endereco,tamanho,cor,numQuarto,temGaragem,banheiros,tempiscina){
        super(endereco,tamanho);
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;
        this._banheiros = banheiros;
        this._tempiscina = tempiscina;
    }
    descrever()
    {

            let descricao = `Casa Localizada em ${this._endereco}, com ${this._tamanho} metros quadrados, de cor ${this._cor}, com ${this._numQuarto} quarto(s) e ${this._banheiros} banheiro(s).`;

            descricao += this._temGaragem ? ' Possui garagem' : ' e NÃO possui garagem';

            descricao += this._tempiscina ? ' E Possui Piscina' : ' e NÃO possui Piscina';

            return descricao;
         
    }
    verificarStatus(){
        VerificarStatusCasa(this).then((resultado) => {
            console.log(resultado);
        }).catch((erro) => {
            console.log(erro);
        });
    }
}






const minhacasa = new Casa('Rua das Flores, 123', 100, 'Azul', 3, true, 2, true);
//const meuapartamento = new apartamento('Rua dos Bichos, 345',80,'Branco', 3,2,"Oitavo Andar", true);

console.log(minhacasa.descrever());

