function crearAutos(marca, modelo, annio, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.precio = precio;
}
var autos = [];
var cantidad_autos = prompt("cuantos autos queres?");

for ( var i = 0 ; i < cantidad_autos ; i++){
    var marca = prompt("cual es la marca?");
    var modelo = prompt("cual es el modelo?");
    var annio = prompt("cual es el año de fabricacion?");
    var precio = prompt("cual es el precio?");
    autos.push(new auto(marca, modelo, annio, precio));
}
