//calculadora

function calculadora (num1 , num2) {
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;  
    let incrementar = num1;
    incrementar++;
    let decrementar = num2;
    decrementar--;

console.log(`adicao ${num1} + ${num2} = ${adicao}`);
console.log(`subtracao ${num1} - ${num2} = ${subtracao}`);
console.log(`multiplicacao ${num1} * ${num2} = ${multiplicacao}`);
console.log(`divisao ${num1} / ${num2} = ${divisao}`);
console.log(`modulo ${num1} % ${num2} = ${modulo}`);
console.log(`incrementar ${num1} ++ = ${incrementar}`);
console.log(`exponencial ${num1} ** ${num2} = ${exponencial}`);
console.log(`decrementar ${num2} -- = ${decrementar}`);

}

calculadora (3,4);