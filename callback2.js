//Se requiere un arreglo de 5 números, después que pasen 5 segundos, se requiere que se sumen los #S
//Luego se debe multiplicar * 100

//Se crea el arreglo
//Un parametro de la función ppal es el callback

function principal(numeros, callback){
    setTimeout(function(){
        let suma = 0
        numeros.forEach(numero =>suma = suma + numero)
        callback(suma)
    },5000)
}
let arreglo = [2,15,20,85,23]
principal(arreglo, function(suma){ //Declarando el callback
    let operacion = suma * 100
    console.log(`La sumatoria final es ${operacion}`)
})

