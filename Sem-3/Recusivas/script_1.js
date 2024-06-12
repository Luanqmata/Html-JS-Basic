function mensagem(text){
    document.write(text)
}
function dobrarValores(array){
        return array.map(num=>num*2);
}
mensagem(dobrarValores([2,4,6]))