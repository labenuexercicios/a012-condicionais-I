//Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.

const numero = Number(prompt("Insira um numero para continuar: "));

if (numero % 2 === 0) {
   alert("O numero é par");
}else{
    alert("O numero é impar");
}