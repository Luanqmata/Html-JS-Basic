var lista = [-1, -2, -5, 10, 15, 20];

function numeros_maiores(lista) {
    console.log('A lista é: ' + lista);

    var positivo = [];

    for (var i = 0; i < lista.length; i++) {
        //console.log(lista[i])

        if (lista[i] > 0) {
            positivo.push(lista[i]);
        }
    }
    console.log(positivo);
}

numeros_maiores(lista);
