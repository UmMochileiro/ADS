

// objetos ex. casas, carros, animais e etc...


class casa{

    //construtor define as propriedades da classe
    constructor(cor,numQuarto,temGaragem,banheiros){
        this.cor = cor;
        this.numQuarto = numQuarto;
        this.temGaragem = temGaragem;
        this.banheiros = banheiros;
    }

    //metodo para descrever a casa
    descrever() {
        let descricao = `Esta casa é de cor ${this.cor}, tem ${this.numQuarto} quarto(s), tem ${this.banheiros} banheiros`;
        if (this.temGaragem){
            descricao += ` e tem garagem...`;
        }else{
         descricao += ` e não tem garagem...`;
        }
        return descricao;
    }

}

//criando objetos (instancias da classe casa)
const minhacasa = new casa("verde",3,true,2);
const suacasa = new casa("roxa",2,false,1);

console.log(minhacasa.descrever());
console.log(suacasa.descrever());