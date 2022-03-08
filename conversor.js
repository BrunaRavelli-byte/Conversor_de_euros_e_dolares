function converter() {
    var valorElemento = document.getElementById ("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);
    console.log (valorEmDolar);
    var valorEmReal = valorEmDolar * 5.05;
    console.log (valorEmReal);

    var elementoValorConvertido = document.getElementById ("valorConvertido");
    var valorConvertido = "O valor em reais é: " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
    }

    function Converter() {
        valorElemento1 = document.getElementById ("value");
        var valor1 = valorElemento1.value;
        var valorEmEuro =  parseFloat(valor1);
        console.log (valorEmEuro);
        var valorEmReais = valorEmEuro * 5.51;
        console.log (valorEmReais);

        var elementoValorConvertido1 = document.getElementById ("valorConvertido_2");
        var valorConvertido1 = "O valor em reais é: " + valorEmReais;
        elementoValorConvertido1.innerHTML = valorConvertido1;
    }
