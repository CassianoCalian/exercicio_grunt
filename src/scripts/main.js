document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("form-sorteador")
    .addEventListener("submit", function (evento) {
      evento.preventDefault();
      let numeroMaximo = document.getElementById("numero-maximo").value;
      numeroMaximo = parseInt(numeroMaximo);

      let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1; // Adicionado + 1 para garantir que o número aleatório não seja 0
      document.getElementById("resultado-valor").innerText = numeroAleatorio;
      document.querySelector(".resultado").style.display = "block";
    });
});
