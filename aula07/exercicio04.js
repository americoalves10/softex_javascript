numeros = [0, 3, 23, 98, 65, 93, 82, 40, 11, 37, 99, 109, 45, 44, 4, 2]
numpar = []
for (i=0; i<=numeros.length-1;i++) {
    if (numeros[i]%2==0) {
        numpar.push(numeros[i])        
    }        
}
console.log(numpar)
