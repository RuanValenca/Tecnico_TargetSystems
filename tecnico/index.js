// 1)

function fibonacci(num) {
    if (num === 0 || num === 1)
        return `O número ${num} está na sequência de Fibonacci`
    let a = 0;
    let b = 1;
    let seq = a + b;

    while (seq <= num) {
        if (seq === num)
            return `O número ${num} está na sequência de Fibonacci`
        a = b;
        b = seq;
        seq = a + b;
    }

    return `O número ${num} não está na sequência de Fibonacci`
}

const valor = 324;
console.log(fibonacci(valor));

// 2)

function ExisteA(str) {
    let countMaiuscula = 0;
    let countMinuscula = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            countMinuscula++;
        } else if (str[i] === 'A') {
            countMaiuscula++;
        }
    }

    if (countMaiuscula > 0 || countMinuscula > 0) {
        console.log(`A letra 'a' minúscula aparece ${countMinuscula} vezes.`);
        console.log(`A letra 'A' maiúscula aparece ${countMaiuscula} vezes.`);
    } else {
        console.log("A letra 'a' ou 'A' não aparece na string.");
    }
}

const Frase = 'OLA, meu nome é Ruan CArlos e estou pArticipando do teste da Target Systems';

console.log(Frase);
ExisteA(Frase);


// 3)
var INDICE = 12, SOMA = 0, K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);


// 4)

//a) 1, 3, 5, 7, ___  -> Próximo número será 9 (x+2)
//b) 2, 4, 8, 16, 32, 64, ____ -> Próximo número será 128 (x+x)
//c) 0, 1, 4, 9, 16, 25, 36, ____ -> Próximo número será 49 (Soma com Números Ímpares)
//d) 4, 16, 36, 64, ____ -> Próximo número será 100 (Quadrado dos Números Pares)
//e) 1, 1, 2, 3, 5, 8, ____ -> Próximo número será 13 (Soma com o último valor)
//f) 2,10, 12, 16, 17, 18, 19, ____ -> Próximo número será 200 (Números que começam com a letra D)


// 5) Primeiramente é preciso ligar dois interruptores e esperar alguns minutos, após isso eu desligo um deles e vou até as salas com as lâmpadas. Nas sala com a lâmpada ligada, será a única com o interruptor ativado, e nas duas com as lâmpadas desligadas basta ver qual delas estará quente, pois como uma delas esteve ligada por alguns minutos, o calor gerado ainda vai estar presente, restando apenas uma lâmpada, apagada e fria.