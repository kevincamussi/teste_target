// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {  K = K + 1;
// SOMA = SOMA + K;
// }

// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?


let K = 0;
let SOMA = 0;

for (let i = 13; K < i; K++ ) {
    SOMA = SOMA+K;
}

console.log(SOMA);

// Valor final da SOMA = 78

/*------------------------------------------------------------------------------------------------------*/

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),escreva um programa na linguagem que desejar onde,informado um número, ele 
// calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


const fiboInput = document.querySelector('#fibo');
const fiboButton = document.querySelector('#fiboButton');
const exibeResultado = document.querySelector('#exibeResultado');
const incluiNumero = `<p class='inclui'> O número informado existe dentro da sequência</p>`;
const naoIncluiNumero = `<p class='nao-inclui'> O número informado não existe dentro da sequência</p>`;

fiboButton.addEventListener('click', ()=> {
    const numeroIndicado = parseInt(fiboInput.value);
    
    const calculoFibonacci = () => {
        const maxCount = 50;
        const sequenciaFibonacci = [];
    
        let numAnterior = 0;
        let proximoNum = 1;
        let numAtual = 0;
    
        for(let i = 0; i < maxCount; i ++){
            numAtual = numAnterior + proximoNum;
            numAnterior = proximoNum;
            proximoNum = numAtual;
            sequenciaFibonacci.push(numAtual);
        }
        
        if(sequenciaFibonacci.includes(numeroIndicado || numAnterior)){
            return exibeResultado.innerHTML=incluiNumero;
        } else {
            return exibeResultado.innerHTML=naoIncluiNumero;
        }
    }
    calculoFibonacci();
})

/*------------------------------------------------------------------------------------------------------*/

// 3) Descubra a lógica e complete o próximo elemento:


// a) 1, 3, 5, 7, 9

// b) 2, 4, 8, 16, 32, 64, 128

// c) 0, 1, 4, 9, 16, 25, 36, 49

// d) 4, 16, 36, 64, 100

// e) 1, 1, 2, 3, 5, 8, 13

// f) 2,10, 12, 16, 17, 18, 19, 200



/* 
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. 
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. 
Seu objetivo é descobrir qual interruptor controla qual lâmpada.Como você faria para descobrir, usando apenas duas idas
até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Resposta:
Ligo o interruptor e espero alguns minutos depois desligo, após isso ligo outro interruptor e vou ate uma das salas, a lâmpada pode estar acesa ,
isso significa que pertence ao segundo interruptor, desligada e quente,significa que pertence ao primeiro interruptor, ou desligada e fria

Quando vou pela segunda vez ligo somente o ultimo interruptor e vou ate outra sala e descubro os outros 


*/


/*------------------------------------------------------------------------------------------------------*/



/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/


const stringButton = document.querySelector('#stringButton');
const stringInput = document.querySelector('#stringInput');
const exibeString = document.querySelector('#exibeStringInvertida');

stringButton.addEventListener('click', () => {
    const inverterString = () => {
        const stringInformada = stringInput.value;
        let stringInvertida = '';
        
        if(stringInformada != ''){
            for(let i = stringInformada.length-1; i >=0; i--){
                stringInvertida += stringInformada[i];
            }
            exibeString.innerHTML = `<p> Sua string invertida é ${stringInvertida}.`
        }
    }
    inverterString();
})





