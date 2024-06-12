function mensagem(text) {
    document.write(text); 
}

function e_palindromo(palavra) {
    if (palavra.length <= 1) {
        return 'É um palíndromo'; 
    }
    if (palavra[0] !== palavra[palavra.length - 1]) {
        return 'Não é um palíndromo'; 
    }
    return e_palindromo(palavra.slice(1, palavra.length - 1));
}

mensagem(e_palindromo('arara')); 

