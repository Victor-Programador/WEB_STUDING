const escola = "cod3r"

console.log(escola.charAt(4)) //posição do indice 4
console.log(escola.charCodeAt(3)) //unicode
console.log(escola.indexOf('3')) // pegar o index de um elemento dentro da string
console.log(escola.substring(1)) 
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // concatenação
console.log(escola.replace(3, 'e')) 

console.log('ana, maria, pedro'.split(','))