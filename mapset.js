'use strict'
///////////////////////ITERABLES//////////////////////////
//iterables siempe con for of 
// dentro de [] puedo tener cualquier tipo de dato
let fruits = [`manzana`, `naranja`, `banana`, `pera`];
for (let fruit of fruits) {
    alert(fruit);
}
// cuando tengo solo un string no es necesario[]
let word= `hola mundo`;
for(let char of word){
    alert(char);
}
// declaro dos variables en una sola linea la igualadad debe ser == un array
let [fruit1, fruit2]= fruits;
alert(fruit1);
alert(fruit2);
// poner ejemplo de map en infografia  un ejemplo con cada uno de map y object keys, desestructuracion de array no workweid 
/////////////////////////////MAP /////////////////////////////
let map= new Map ();
map.set("ruc","069790505-4");
map.set("usuario", "Pepito10");
map.set("edad", 29);
map.set(true, "mayor de edad");
map.delete(true);

alert(map.get("ruc"));
alert("si");
alert(map.get("edad"));
alert(map.has(true));
//map.clear();
alert(map.size);
alert(map.get(true));
alert(map.keys());

let activitiesMap = new Map ([
["horario", "8 am"],
["ejercicio", "gym"]
]);
for(let datos of activitiesMap.keys()){
    alert(datos);
}
for( let valor of activitiesMap.values()){
    alert(valor);
}
for (let entrada of activitiesMap.entries()){
    alert(entrada);
}
activitiesMap.forEach((value, key, map) =>  {
    alert (`${key} : ${value}`);
})
/////////////////////////////SET//////////////////////////////////////////
let set = new Set ();
let Victoria = {name: "Victoria"};
let Bernardo = {name: "Bernardo"};
let Edgar = {name:"Edgar"};
let Susana = {name: "Susana"};
set.add(Victoria);
set.add(Susana);
set.add(Edgar);
set.add(Bernardo);
set.add(Susana);
set.add(Edgar);
set.add(Bernardo);
alert(set.size);
for(let estudiantes of set){
   alert(estudiantes.name);
}
//preguntar 
for(let nombres of set.keys()){
    alert(nombres);
}
for (let meme of set.values()){
    alert(meme);
}
for(let completos of set.entries()){
    alert(completos);
}
let colores = new Set ([
    "Celeste","rojo", "violeta", "naranja", "blue"
]);
//for (let colors of colores) alert (colors);
//let colors='';

colores.forEach((colors, colorss, colores) => {alert(colors);});

//////////////////////////OBJECT, KEYS, VALUES, ENTRIES///////////////////////////////

let frutas = {
    fruta1: "manzana",
    fruta2: "pera",
    fruta3: "sandia"
}
for(let grupo of Object.values (frutas)){
    alert(grupo);
}
for(let grupo of Object.keys (frutas)){
    alert(grupo);
}
for(let grupo of Object.entries (frutas)){
    alert(grupo);

/////////////DEESTRUCTURANTE ARRAY/////////////////
 let map= [
"ruc","069790505-4",
 "usuario", "Pepito10",
 "edad", 29
 ]
 let [dato1, dato2]  = map;
 alert(dato1);
 alert(dato2);

 let frutas = {
    fruta1: "manzana",
    fruta2: "pera",
    fruta3: "sandia"
 }
 let {fruta1, fruta2} = frutas;
 alert(fruta1);
 alert(fruta2);

 ///////////////////FECHA Y HORA/////////////////
 let now = new Date();
alert( now );
