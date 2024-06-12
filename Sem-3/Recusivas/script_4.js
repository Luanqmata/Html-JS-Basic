function mensagem(text){
    document.write(text)
}
function menorValor(lista,indice=0,menor=Infinity){
    if(indice === lista.length){
        return menor
    }
    if(lista[indice] < menor){
        menor = lista[indice]
    }
    //chamada recursiva
    return menorValor(lista,indice+1,menor)

}
menor = menorValor([12,3,4,12,432])
mensagem("O menor valor é: "+menor)