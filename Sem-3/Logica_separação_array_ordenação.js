
function mensagem(text){
    document.write(text);
    document.write("<br>");
}
// essa funcao basicamente ela serve para ordenar duas arrays , primeiro ela percorreos dados da primeira
//e depois os dados da segunda , depois ela compara os primeiros indices dos dois arrays e o que for
// menor vai ser adicionado na lista de armazenamento.
function ordenaArray(subArrayEsquerdo,subArrayDireito){ // cria uma função q o nome é ordena aray , e ela recebe 2 arrays de parametro
    let array = []; // cria uma array vazia , onde provavelmente irá ser guardado a array final
    while( subArrayEsquerdo.length && subArrayDireito.length ){ // cria um while loop , para percorrer os dados das 2 arrays
        if (subArrayEsquerdo[0] < subArrayDireito[0]) {  // cria uma condição que se o primeiro indice do array direito for maior do q o indice do array esquerdo
            array.push(subArrayEsquerdo.shift()) // se o numero do array direito for Maior do q o esquerdo , ele vai armazenar na variavel array no final , vai pegar esse elemento unitario com o comando SHIFT(' que serve para pegar o primeiro elemento da array e armazenar em algum lugar e o resto da array fica intacta , e assim por diante se mandou o primeiro depois irá mandar só o segundo') e vai mandar para a variavel de armazenamento que o nome é array
        } else { // e se o numero direito for menor que o array da esquerda 
            array.push(subArrayDireito.shift()) // ele vai pegar o primeiro elemento da subArrayDireito e vai adicionar no final da array de armazenamento ( array ) e o resto do array vai ficar intacto. ate completar o looping novamente e adiciona-lo novamente 
        }
    }
    return[ ...array,...subArrayEsquerdo,...subArrayDireito ] // OPERADOR SPREAD , ele cria uma nova array usando os elementos de todas as arrays que estão dentro do colchet 
}

// ESSA FUNÇÃO BASICAMENTE ELA VAI PEGAR UMA ARRAY INTEIRA E VAI DIVIDIR ESSA ARRAY NO MEIO
//E DEPOIS VAI CRIAR UMA PARTE PARA A ESQUERDA , E OUTRA A OUTRA AINDA NAO VIRA DIREITA , MAS ELA FICA NO ARRAY ORIGINAL QUE É O ARRAY DESORDENADO , DEPOIS O ARRAY DESORDENADO É PASSADO COMO PARAMENTRO PARA O ARRAY DIREITO (' O RESTO NO CASO ')
function merge_sort(arrayDesordenado){ // cria uma função , que recebe uma array desordenada
    const indice_meio = arrayDesordenado.length / 2; // cria uma constante indice_meio , que percorre todos os dados da array DESORDENADA e divide por 2
    if(arrayDesordenado.length<2){ // e se os dados da array Desordenado for menor que 2 
        return arrayDesordenado // vai retornar o array DESORDENADO
    }
    const subArrayEsquerdo = arrayDesordenado.splice(0,indice_meio) // cria um constante do subarray esquerdo , que os valores do array desordenado irá ser mandado para a arrayEsquerdo , o splice está sendo ultilizado para pegar os indices e enviar de uma array a outra (arrayDesordenado-->subArrayEsquerdo) e o splice está setado para começar no começo da array porque está no numero 0 , e o segundo indice é para falar a quantidade de indices que serão enviados para a subArrayEsquerdo
    return ordenaArray(merge_sort(subArrayEsquerdo),merge_sort(arrayDesordenado)) // ela vai retornar a função de ordenar a array , com os parametros de organizar primeiro a subArrayEsquerdo ,e depois ordenar o ArrayDesordenado
}

arrayDesordenado = [ 12,123,5,6,34,44,124,89,2,5,21,56] // cria a lista de numeros desordenados 
console.log(arrayDesordenado); // imprime a resposta no console 
mensagem(arrayDesordenado) //e imprime na tela 
arrayOrdenado = merge_sort(arrayDesordenado); // cria uma var arrayOrdenado que vai ser usado dentro da função , recebendo o merge_sorte('que vai fazer a separação dessa lista que vai ser passada como parametro')
console.log(arrayOrdenado); // imprime no console.
mensagem(arrayOrdenado) // imprime direto na tela.
