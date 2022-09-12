//Converter de Reias em Dólar
function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = parseFloat(valorElemento.value);
    console.log(valor);

    var ConvertidoReal = valor / 5.15;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = " O valor de $ " + valor + " em R$ é : " + ConvertidoReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;


    //Converter de Reias em Euro
    var valorDigitado = document.getElementById("valor2");
    var valor2 = parseFloat(valorDigitado.value);
    var valorConvertidoReal2 = valor2 / 5.18;
    var elementoValorConvertido2 = document.getElementById("valorConvertido2");
    var respostaConversao = "O valor de € " + valor2 + " em R$ é : " + valorConvertidoReal2.toFixed(2);
    elementoValorConvertido2.innerHTML = respostaConversao;
}

