var numeros = [1,2,3,4,5,6,7,8,9,10];

function pula(){
	console.log("<br>");
}

function soma_pares() {
	var soma = 0;

	for(var i = 0;i <=9;i ++){
		if(numeros[i]%2 ==0){
			soma += numeros[i]
		}
	}
	return soma
}

console.log('lista', numeros);
//pula();
console.log('O resultado da soma dos numeros pares dentro dessa aray é:' + soma_pares())
