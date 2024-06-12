function mensagem(text){
    document.write(text)
}
//luan
function soma_elementos(array,soma){
    soma = 0;
    array.map(num=>soma+=num)
    return soma
}
//mensagem(soma_elementos([1,2,3]))

//halbert
function somaElementos(lista,soma){
    if(lista.length==1){
        soma += lista.pop();
        return soma;
    } else {
        soma += lista.pop();
        return somaElementos(lista,soma);
    }
}
//var total = somaElementos([12,34,54],0)
//mensagem(total) 

//sandir
function SomaElementos(lista,indice = 0){
    if(indice===lista.length){
        return 0
    }
    return lista[indice]+SomaElementos(lista,indice+1)
}
//mensagem(SomaElementos([1,2,3]))
armazenamento = []
//TENTATIVA FRUSTRADA
function looping_perguntas(){
    for(let i =0;i=6;i++){
        perguntas = Number(prompt('Digite os numeros para serem somados: '))
        if(perguntas === 0){
            break
        } else {
            armazenamento.push(perguntas)
            looping_perguntas()
        }
    }
}
looping_perguntas()
mensagem(SomaElementos(armazenamento))