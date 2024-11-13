//Palabra reservada: function
//el nombre que le damos a la funcion suma 
//(nosotros pasamos los parametros)
// a, b son numeros enteros
//return me permite devolver algo
function suma (a,b){
    return a + b
}
const resultado = suma (4,5)
console.log(resultado)
const resta = (a,b) => a-b

// estructuras de control condicional

let color = "rojo"
if (color=== "rojo"){
    console.log("Elegiste el color rojo")
} else {
    console.log("Elegiste otro color")
}

// bucles
for(let i=0; i<= 5; i++){
    console.log(i)
}