
var saludo = function(){

	var salida = document.createTextNode("zarcero");
	var destino = document.createTextNode("sucre");
//    alert( $('#salida').val());

    $('#salida1').html(  $('#salida').val());

    $('#salida2').html(  $('#salida').val());

    $('#salida3').html(  $('#salida').val());

    $('#destino1').html(  $('#destino').val());

    $('#destino2').html(  $('#destino').val());

    $('#destino3').html(  $('#destino').val());



    /*document.getElementById("#salida1").innerhtml = $('#salida').value;
    document.getElementById("salida2").innerhtml = $('#salida').value;
    document.getElementById("salida3").innerhtml = $('#salida').value;
*/

};
document.getElementById("add").addEventListener("click", saludo);

$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})