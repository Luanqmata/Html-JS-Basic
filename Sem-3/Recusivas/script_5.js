function mensagem(text){
    document.write(text)
}
function reverter_string(palavra){
    //caso a string tiver 0 ou 1 retorna a propia string
    if (palavra.length == 0 && palavra.length == 1){
        return palavra;
    }
    // chamada recursiva para inverter a substrig restante
    return reverter_string(palavra.substring(1))+palavra[0]
}

mensagem(reverter_string(mato))