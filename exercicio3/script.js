//Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

//Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
//- brasileira;
//- argentina;
//- uruguaia;
//- chilena;
//- colombiana;

//Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

//> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 




let nacionalidade = prompt('Escreva aqui sua nacionalidade').toLowerCase()

const nacionalidade1 = 'brasileira'
const nacionalidade2 = 'argentina'
const nacionalidade3 = 'uruguaia'
const nacionalidade4 = 'chilena'
const nacionalidade5 = 'colombiana'

if (nacionalidade === nacionalidade1) {
    console.log('A sua nacionalidade é: ' + nacionalidade1)
}else if (nacionalidade === nacionalidade2) {
    console.log('A sua nacionalidade é: ' + nacionalidade2)
}else if (nacionalidade === nacionalidade3) {
    console.log('A sua nacionalidade é: ' + nacionalidade3)
}else if (nacionalidade === nacionalidade4) {
    console.log('A sua nacionalidade é: ' +nacionalidade4)
}else if (nacionalidade === nacionalidade4) {
    console.log('A sua nacionalidade é: ' + nacionalidade3)
}else {
    console.log('nacionalidade nao encontrada')
}