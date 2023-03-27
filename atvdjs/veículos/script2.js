function calcularParcelas() {

    let modelo = document.getElementById("modelo").value;
    let preco = parseFloat(document.getElementById("preco").value);


    let entrada = preco * 0.5;
    let saldoParcelas = preco * 0.5 / 12;


    let entradaElemento = document.getElementById("entrada");
    entradaElemento.innerHTML = "Para o veículo " + modelo + ", a entrada é de R$" + entrada.toFixed(2) + ".";

    let parcelasElemento = document.getElementById("parcelas");
    parcelasElemento.innerHTML = "O saldo pode ser parcelado em 12x de R$" + saldoParcelas.toFixed(2) + ".";
  }