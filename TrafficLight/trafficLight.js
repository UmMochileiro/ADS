
//funcao pra receber a luz;

checkTrafficLight(`Verde`);
checkTrafficLight(`Amarelo`);
checkTrafficLight(`Vermelho`);
checkTrafficLight(`Branco`);


function checkTrafficLight (lightColor) {


switch (lightColor) {
    case `Verde`:
        console.log("Pode atravessar rua");
        break;
    case `Amarelo`:
        console.log(" se preparar para parar");
        break;
    case `Vermelho`:
        console.log(" Pare! Não atravesse!");
         break;
    default:
        console.log(" Cor Inválida! Aguarde até que o semáforo esteja em uma cor válida");
        break;
    	}
}
