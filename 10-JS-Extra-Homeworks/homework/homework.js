// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let arreglo = []

  for(let i in objeto){
    arreglo.push([i,objeto[i]]);
  }

  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let stringProc = string.split(""),
      objeto = {};


  for (let i of stringProc) {
    if(!objeto[i]){
      objeto[i] = 0;
    }
  }

  for (let i of stringProc) {
    if(!isNaN(objeto[i])){
      objeto[i] = objeto[i]+1;
    }
  }

  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let respaldo_1 = "",
      respaldo_2 = "";

  for(let i =0; i<s.length;i++){
    if(s[i]===s[i].toUpperCase()){
      respaldo_1 = respaldo_1.concat(s[i]);
    }
  }

  for(let i =0; i<s.length;i++){
    if(s[i]===s[i].toLowerCase()){
      respaldo_2 = respaldo_2.concat(s[i]);
    }
  }

  return respaldo_1.concat(respaldo_2);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let respaldo = str.split(" ");

  for(let i = 0; i<respaldo.length; i++){
    respaldo[i] = respaldo[i].split("").reverse().join("");
  }

  return respaldo.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let comparacion = (numero+"").split("").reverse().join("");

  return (numero+""==comparacion)?"Es capicua":"No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  return ((cadena.split("")).filter(e=>e!='a' && e!= 'b' && e!= 'c')).join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  // --------------------------------------------------------
  // --------------------------------------------------------
  // --------------------------------------------------------
  // --------------------------------------------------------


  // function verificarOrden(a){

  //   let retorno = true; 

  //   for (let i = 0; i<a.length; i++) {

  //     if(a[i+1] != undefined){
  //       if(a[i].length>a[i+1].length) return false;
  //     }
  //   }
  //   return retorno;
  // }

  // --------------------------------------------------------
  // --------------------------------------------------------
  // --------------------------------------------------------

  // for(let i = 0; i<arr.length; i++){
    
  // }
  
  return nuevoArreglo;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 

  let interseccion = [];

  arreglo1.forEach((e)=>{
    for (let i = 0; i<arreglo2.length; i++) {
      if(e==arreglo2[i]) interseccion.push(e);
    }
  });

  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

