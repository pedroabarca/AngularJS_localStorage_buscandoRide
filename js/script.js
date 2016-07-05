
var saludo = function(){

    $('#salida1').html(  $('#salida').val());

    $('#salida2').html(  $('#salida').val());

    $('#salida3').html(  $('#salida').val());

    $('#destino1').html(  $('#destino').val());

    $('#destino2').html(  $('#destino').val());

    $('#destino3').html(  $('#destino').val());
};
document.getElementById("add").addEventListener("click", saludo);

