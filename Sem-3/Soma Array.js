
    function somar_array(){

        var lista = [9, 4, 1, 2, 6];

        var soma = 0; // Inicializa a variável soma

        for(var i = 0; i < lista.length; i++){
            soma += lista[i]; // Adiciona cada elemento à variável soma
        }

        console.log("A soma dos elementos é: " + soma);
    }

    somar_array();

