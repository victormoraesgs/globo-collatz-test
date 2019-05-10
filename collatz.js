/**
 * Pergunta:
 * Conjectura de Collatz
 * ----------------------
 *
 * fonte: http://en.wikipedia.org/wiki/Collatz_conjecture
 *
 * A seguinte sequência iterativa é definida pelo conjunto de inteiros positivos onde:
 *
 * n -> n/2 (se n é par)
 * n -> 3n + 1 (se n é impar)
 *
 * Por exemplo, usando as regras acima e começando pelo número 13, nós geraríamos a seguinte sequência:
 *
 * 13 40 20 10 5 16 8 4 2 1
 *
 * O que pode ser observado dessa sequência (começando no 13 e terminando no 1) é que ela contém 10 items. Embora ainda não esteja matematicamente provado, é esperando que, dado um numero inteiro positivo qualquer, a sequencia sempre chegará em 1.
 *
 * Pergunta: Qual inteiro positivo abaixo de 1 milhão produz a sequencia com mais items?
 *
 * Desafio: Crie um código em javascript que calcule a resposta. Você pode usar o ambiente de sua escolha e nos enviar a resposta (código).
 * Vamos avaliar a correção da solução, performance e legibilidade do código.
 */

/**
 * Array onde o índice representa o número e o valor representa o tamanho da
 * sequência da Conjectura de Collatz.
 */
let tamanhosCalculados = [0, 1];
const limite = 10 ** 6;
let maiorSequencia = {
  numero: 1,
  tamanho: 1
};

for (let numero = tamanhosCalculados.length; numero < limite; numero++) {
  let numeroAtual = numero;
  let tamanho = 0;
  while (numeroAtual > 1 && numeroAtual >= 1) {
    tamanho++;
    numeroAtual = numeroAtual % 2 === 0 ? numeroAtual / 2 : 3 * numeroAtual + 1;
  }
  tamanhosCalculados[numero] = tamanho + tamanhosCalculados[numeroAtual];

  if (tamanhosCalculados[numero] > maiorSequencia.tamanho)
    maiorSequencia = { numero, tamanho: tamanhosCalculados[numero] };
}

console.log(
  `O número ${maiorSequencia.numero} produz a sequência de tamanho ${
    maiorSequencia.tamanho
  }, que é a maior produzida por números inteiros abaixo de 1.000.000.`
);
