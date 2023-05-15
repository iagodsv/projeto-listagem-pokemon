const botaoTema = document.getElementById("botao-tema"); //buscando o ID do botão tema
const body = document.querySelector("body"); // buscando tudo que está no body
const imagemBotaoTema = document.querySelector(".img-tema");

botaoTema.addEventListener("click", () => {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  if (modoEscuroAtivo) {
    imagemBotaoTema.setAttribute("src", "../src/image/sun.png");
  } else {
    imagemBotaoTema.setAttribute("src", "../src/image/moon.png");
  }
});
