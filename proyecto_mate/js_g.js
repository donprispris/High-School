$(document).ready(function () {

    // VARIABLES
    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');

    // INIT 
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // AGREGAR NUMEROS A INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    // MOSTRAR RESULTADO
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    // POWER BUTTON
    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 3 ) );
    });

    // ATRAS BUTTON
    calcSpace.on('click', function () { // https://www.w3schools.com/jsref/jsref_substring.asp
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});




      
    


//document.write(math.derivative("x^2 + x", "x"));

//var resultado= (math.derivative("x^2 + x", "x"));
//document.getElementById("container").innerHTML= resultado;

function de() {
    var A= parseInt(document.getElementById("A").value);
    var B= parseInt(document.getElementById("B").value);
    var C= parseInt(document.getElementById("C").value);
    var resultado= (-B -(Math.sqrt(Math.pow(B,2)-4*A*C)))/(2*A);
    var resultado2 = (-B +(Math.sqrt(Math.pow(B,2)-4*A*C)))/(2*A);
    document.getElementById("container").innerHTML="X1 = "+ resultado +"<br>";
    document.getElementById("container2").innerHTML="X2 = "+ resultado2;
}

   
function historial(){
    var h =document.getElementById("historial"); 
    var n = h.childElementCount;
    var guardado= document.getElementById("inputField").value;
    
    $("#historial").append("<div id='historial"+ n+"' class='h'>" +"f(x)=  "+ guardado + "<button id='he' type='button'  onclick='eliminar(historial"+n+")'> Eliminar </button>"+ "</div>");
        
    

    

}
function eliminar(id){
    $(id).remove();
}




