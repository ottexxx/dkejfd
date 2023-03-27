function calcularValor() {

    let preco = parseFloat(document.getElementById("preco").value);
    let consumo = parseInt(document.getElementById("consumo").value);


    let valor = 0;
    if (consumo <= 100) {
      valor = preco * consumo / 1000;
    } else if (consumo <= 500) {
      valor = preco * consumo / 1000 * 0.9;
    } else {
      valor = preco * consumo / 1000 * 0.8;
    }


    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "O valor a ser pago é de R$" + valor.toFixed(2) + ".";
  }