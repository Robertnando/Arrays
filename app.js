"use strict";
//Uso del lenght
//Es  la longitud  de los elementos que tiene nuestra variable en nuestro caso el array
let bakas = ["Cirno", "Gru", "Chirumiru", "Bob", "Alt+F4"]
let smortfellas = ["Vector", "Nerd Emoji", "Megamente"]

//En este caso hay un total de 5 nombres lo cual el comando con length nos deberia de dar 5!
console.log(bakas.length);

//Acceder a elementos.
//Hay varias maneras de acceder a un elemento del array.
console.log(bakas[2]);

//uso de length-1
console.log(bakas.length-1);

//Tambien esta la opcion (bakas.at(4)) = Alt+F4. Pero su diferencia con los corchetes es que podemos pedir numeros negativos.
//Por ejemplo si se pone el -2 se obtendra el peultimo numero
console.log(bakas.at(-2))
//---------------------------------------------------------------------
//Mutabilidad = que pueda cambiar o modificar
//lo que hace push es agregar otra baka al final.
bakas.push("Reimu");

//la funcion del unshift permite agregar otra string en el array.
bakas.unshift("Blue label de johnnie walker")

//La funcion splice sirve para agregar y eliminar elementos de un array
// bakas.splice("Donde agregarlo", "Que eliminar", "Nombre del string nuevo.")
bakas.splice(2,0, "bebe repeat after me");

//elemento pop
//Elimina y retorna el elemento ULTIMO elemento del array
//Mietras que el shift te trae el PRIMERO de tu array
//El estado es el valor que tiene los objetos como los arrays.
let b =bakas.pop();
let b2 = bakas.shift();
console.log(b)
console.log(b2);
//--------------------------------------------------------------------------
//METODO INMUTABLE
//CONCAT() que es el concatenar
const ALLMYFELLAS = bakas.concat(smortfellas);
ALLMYFELLAS.push("POMNI CHIQUITA");

console.log(ALLMYFELLAS)




//--------------------------------------------------------
//Funciones del array con el For.
//se usara numero por que no le se con strings xd
//si no quieres eliminar algo solo se pone el numero 0
let NumberLore = [4,2,10,69,420]


show(NumberLore)
showDom("array1", NumberLore)
showDom("array2", ALLMYFELLAS)

function show(arr){
    for(let i=NumberLore.length -1 ; i >= 0; i--){
        console.log(NumberLore[i])
    };
}
function showDom(element, arr){
    document.getElementById(element).innerHTML = "";
    for(let i=NumberLore.length -1 ; i >= 0; i--){
        document.getElementById(element).innerHTML +=
           '<div>${arr[i]}</div>';
    };
}
