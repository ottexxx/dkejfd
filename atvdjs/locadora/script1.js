function exibirDuracao() {

    let titulo = document.getElementById("titulo").value;
    let duracaoMinutos = parseInt(document.getElementById("duracao").value);

    let duracaoHoras = Math.floor(duracaoMinutos / 60);
    let duracaoMinutosRestantes = duracaoMinutos % 60;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "O filme " + titulo + " tem duração de " + duracaoHoras + " hora(s) e " + duracaoMinutosRestantes + " minuto(s).";
  }