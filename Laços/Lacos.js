//for (let rua = 1; rua <=10; rua++){
//   console.log(`Entregando na rua: ${rua}`);
//}
//if (rua=10){
//    console.log("Parabéns, entregas finalizadas");
//}

//exemplos das flexoes
// let flexoes=0;
 //let cansaco=false;

   // while (!cansaco) {
   // console.log(`Flexões feitas: ${flexoes}`);
    //flexoes++;
   // if(flexoes===16){
      //  cansaco=true;
       // console.log("Cansei :X");
  //  }

//}
// 
// 
// 
// 
// 
// 
// 
//  

// teste do do while


let tempo = 0;
let queda = false;
do{
    tempo++;
    console.log(`estou andando de bicicleta por ${tempo} minutos`);
   
    if(tempo===11){
        queda=true;
    }
}while(!queda && tempo<10);