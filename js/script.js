
var saludo = function(){

    $('#salida1').html(  $('#salida').val());

    $('#salida2').html(  $('#salida').val());

    $('#salida3').html(  $('#salida').val());

    $('#destino1').html(  $('#destino').val());

    $('#destino2').html(  $('#destino').val());

    $('#destino3').html(  $('#destino').val());

    $('#td1').html('Carlitos');

    $('#td2').html('Julio');

    $('#td3').html('Rodolfo');

		
    $('#ver1').html('<a href="https://www.google.es/maps/place/Costa+Rica">Ver</a>');

    $('#ver2').html('<a href="https://www.google.es/maps/place/Costa+Rica">Ver</a>' );

    $('#ver3').html('<a href="https://www.google.es/maps/place/Costa+Rica">Ver</a>' );



};
document.getElementById("add").addEventListener("click", saludo);

