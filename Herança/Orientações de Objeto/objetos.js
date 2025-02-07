

// objetos ex. casas, carros, animais e etc...


class casa{
    //construtor define as propriedades da classe
    constructor(cor,numQuarto,temGaragem,banheiros){
        //propriedades privadas usam o underscore
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;
        this._banheiros = banheiros;
    }
    //metodo para descrever a casa
    descrever() {
        let descricao = `Esta casa é de cor ${this._cor}, tem ${this._numQuarto} quarto(s), tem ${this._banheiros} banheiros`;
        if (this._temGaragem){
            descricao += ` e tem garagem...`;
        }else{
         descricao += ` e não tem garagem...`;
        }
        return descricao;
    }
}
//criando objetos (instancias da classe casa)
const minhacasa = new casa("verde",3,true,2);
const suacasa = new casa("roxa",2,false,1,true);

console.log(minhacasa.descrever());
console.log(suacasa.descrever());


// criando uma classe derivada ou herdada
class casaluxuosa extends casa {
    constructor(cor,numQuarto,temGaragem,banheiros,temPiscina){
        //chama o construtor base e acrescenta o "tem piscina"
        super(cor,numQuarto,temGaragem,banheiros,);
        // Preenche o espaço do tem piscina
        this._temPiscina = temPiscina;
    }
    get temPiscina(){
        return this._temPiscina;
    }
    set temPiscina(novoTemPiscina){
        this._temPiscina = novoTemPiscina;
    }
    descrever(){
        let descricao = super.descrever();
        if(this._temPiscina){
            descricao += "  E tem Piscina!";
        }else{
            descricao += "  E NÃO tem Piscina!";
        }
        return descricao;
    }

}

const minhacasa2 = new casaluxuosa("Laranja",7,true,5,true);
const suacasa2 = new casaluxuosa("Marrom",5,false,3,false);

console.log(minhacasa2.descrever());
console.log(suacasa2.descrever());



        
    
    