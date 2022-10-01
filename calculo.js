var botao = document.getElementById('botao');

function calcularHipotenusa(){
    var a = document.getElementById('entradaA').value;
    var b = document.getElementById('entradaB').value;

    var resultado = document.getElementById('resultado');

    var hipotenusa = Math.round(Math.sqrt((a*a) + (b*b))); //realiza o teorema de pitagoras e caso seja decimal arredonda o numero

    resultado.innerHTML=hipotenusa;
}

botao.addEventListener('click', calcularHipotenusa)