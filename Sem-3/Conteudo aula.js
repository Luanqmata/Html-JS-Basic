var lista = [1,2,33,56,24,6,7856,243,1,67,243,568,24,4,11];
var maior = [lista[0]]

function RetornaMaiorLista(lista){
	for (var i = 0 ;i <= lista.length; i++) {
		//console.log('A lista é:' + lista[i])

		if (lista[i]> maior){
			maior =lista[i]
		}
	}
}

RetornaMaiorLista(lista)

console.log('O maior Valor é '+ maior)
