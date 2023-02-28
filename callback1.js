function saludar(){//Declarando la función 1
    setTimeout(function(){
        console.log("Hola cómo estás?");
        despedir()//Llamando a la función 2
    },3000)    
}

function despedir(){//Declarando la función 2
    console.log("Adios, mucha suerte");
}

saludar() //Llamando a la función 1

