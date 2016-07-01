
var saludo = function(){

	var salida = document.createTextNode("zarcero");
	var destino = document.createTextNode("sucre");
    document.getElementById("salida1").appendChild(salida);
    document.getElementById("salida2").appendChild(salida);
    document.getElementById("salida3").appendChild(salida);

};
document.getElementById("add").addEventListener("click", saludo);

