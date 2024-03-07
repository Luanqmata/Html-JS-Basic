
    var lista = [55, 44];
  
    var menor = lista[0];
    var maior = lista[0];

    function RetornaMaiorMenor(lista) {
        console.log('A lista: ' + lista);

        for (var i = 0; i < lista.length; i++) {
          
            if (lista[i] < menor) {
                menor = lista[i];
            } else if (lista[i] > maior) {
                
                maior = lista[i];
            }
        }
    }

   
    RetornaMaiorMenor(lista);

    console.log('O valor maior é: ' + maior + ' Forma crescente: ' + menor + ',' + maior);
    console.log('O valor menor é: ' + menor + ' Forma decrescente: ' + maior + ',' + menor);
