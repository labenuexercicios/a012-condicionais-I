// Usando prompt dgite sua nacionalidade.

const nacionalidade = prompt("Escreva aqui sua nacionalidade")

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}

// Caso não seja encontrando sua nacionalidade, a mensagem nacionalidade não encontrada sera exibida.
