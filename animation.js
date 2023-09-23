// Simulando um carregamento demorado
setTimeout(function() {
  var loadingContainer = document.querySelector('.loading-container');
  var content = document.querySelector('.content');

  loadingContainer.classList.add('hidden');
  content.classList.remove('hidden');
  }, 3500); // Tempo em milissegundos (3.5 segundos no exemplo)
 
// Simulando o scroll
window.addEventListener("scroll", function () {
    var header = document.getElementById("fixed-header");
    if (window.pageYOffset > 100) { // Ajuste o valor conforme necessário para controlar quando o efeito deve ser ativado
        header.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // Cor de fundo mais transparente
    } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // Cor de fundo quase transparente original
    }
});
