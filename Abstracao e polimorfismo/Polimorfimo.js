//agora, ao inves de uma classe base, vamos abstrair para imóveis

class imovel{
    constructor(endereco,tamanho){
        this._endereco = endereco;
        this._area = tamanho;  
    }
    descrever(){
        throw new Error("Esse Método deve ser implementado por subclasses");
    }
}

class casa extends imovel{
    constructor(endereco,tamanho,cor,numQuarto,temGaragem,banheiros,tempiscina){
        super(endereco,tamanho);
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;
        this._banheiros = banheiros;
        this._tempiscina = tempiscina;
    }
    descrever(){
        let descricao = `Casa Localizada em ${this._endereco}, com ${this._area} metros quadrados, de cor ${this._cor}, com ${this._numQuarto} quarto(s) e ${this._banheiros} banheiro(s).`;
            descricao += this._temGaragem ? ' Possui garagem' : ' e NÃO possui garagem';
         descricao += this._tempiscina ? ' E Possui Piscina' : ' e NÃO possui Piscina';
        return descricao;
    }
}
class apartamento extends imovel{
    constructor(endereco,tamanho,cor,numQuarto,banheiros,andar,temElevador){
        super(endereco,tamanho);
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._banheiros = banheiros;
        this._andar = andar;
        this._temElevador = temElevador;
    }
    descrever(){
        let descricao = `Apartamento Localizada em ${this._endereco}, no ${this._andar}, com ${this._area} metros quadrados, de cor ${this._cor}, com ${this._numQuarto} quarto(s) e ${this._banheiros} banheiro(s).`;
            descricao += this._temElevador ? ' Possui elevador' : ' e NÃO possui elevador';
        return descricao;
    }
}
const minhacasa = new casa('Rua das Flores, 123', 100, 'Azul', 3, true, 2, true);
console.log(minhacasa.descrever());
const meuapartamento = new apartamento('Rua dos Bichos, 345', 80, 'Branco', 3,2,"Oitavo Andar", true);
console.log(meuapartamento.descrever());