function crearAutos(marca, modelo, annio, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.precio = precio;
}
var autos = [];
var cantidad_autos = prompt("cuantos autos queres?");

for (var i = 0 ; i < cantidad_autos ; i++){
    var marca = prompt("cual es la marca?");
    var modelo = prompt("cual es el modelo?");
    var annio = prompt("cual es el año de fabricacion?");
    var precio = prompt("cual es el precio?");
    autos.push(new crearAutos(marca, modelo, annio, precio));
}

console.log(autos);
/*
Vos armaste una funcion constructora crearAutos asi que deberias hacer
new crearAutos(...) en lugar de new auto(...)
Yo usaria 'auto' como nombre de la funcion ya que te devuelve un auto
Con ese cambio ya anda el loop, despues tendrias que ver que hacer
con tu array autos, pero en principio podes poner un console.log(autos)
*/

// los ubo aunque tampoco le agregué nada nuevo