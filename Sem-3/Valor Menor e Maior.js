 // Lista de valores
    var lista = [55, 44];
    // Variáveis globais para armazenar maior e menor valor
    var menor = lista[0];
    var maior = lista[0];

    function RetornaMaiorMenor(lista) {
        console.log('A lista: ' + lista);

        for (var i = 0; i < lista.length; i++) {
            // Compara o valor com o menor e atualiza se necessário
            if (lista[i] < menor) {
                menor = lista[i];
            } else if (lista[i] > maior) {
                // Compara o valor com o maior e atualiza se necessário
                maior = lista[i];
            }
        }
    }

    // Chamando a função
    RetornaMaiorMenor(lista);

    console.log('O valor maior é: ' + maior + ' Forma crescente: ' + menor + ',' + maior);
    console.log('O valor menor é: ' + menor + ' Forma decrescente: ' + maior + ',' + menor);
