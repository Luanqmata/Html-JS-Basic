  lojas = {
        'mappin': 4549,
        'submarino': 5499,
        'amazon': 2119,
        'livraria_cultura': 4099,
        'meslla': 3768
    };

    // Inicializa as variáveis
    var lojaMaisBarata = '';
    var precoMaisBarato = Infinity;

    // Loop para percorrer as lojas
    for (var loja in lojas) {
        if (lojas.hasOwnProperty(loja)) {
            console.log(loja + ' - R$' + lojas[loja]);

            // Verifica se o preço atual é menor que o preço mais barato atual
            if (lojas[loja] < precoMaisBarato) {
                precoMaisBarato = lojas[loja];
                lojaMaisBarata = loja;
            }
        }
    }

    console.log('A loja mais barata é: ' + lojaMaisBarata + ' - R$' + precoMaisBarato);
