// capturar elementos - gatinhosContainer, input do nome, input da url, form
const gatinhosContainer = document.getElementById('gatinhosContainer');
const inputNomeDoGato = document.getElementById('inputNomeDoGato');
const inputURLDoGato = document.getElementById('inputURLDoGato');
const form = document.getElementById('form');
// inserir um evento no form
form.addEventListener("submit", function(){
  // criar uma div
  // colocar classe "gatinho__card"
  const gatinhoCard = document.createElement('div');
  gatinhoCard.className = "gatinho__card";

  // criar elemento imagem
  // capturar valor do input da foto
  // inserir o src cujo valor é o valor do input da foto
  // adicionar classe no elemento imagem
  const gatinhoImg = document.createElement('img');
  const gatinhoImgURL = inputURLDoGato.value
  gatinhoImg.setAttribute('src', gatinhoImgURL);
  gatinhoImg.classList.add("gatinho__imagem");

  // criar elemento p
  // capturar input nome
  // inserir input nome dentro do p
  // adicionar classe no elemento p
  const gatinhoNome = document.createElement('p');
  gatinhoNome.textContent = inputNomeDoGato.value;
  gatinhoNome.classList.add('gatinho__titulo');

  // inserir imagem na "gatinho__card"
  // inserir p na "gatinho__card"
  gatinhoCard.appendChild(gatinhoImg);
  gatinhoCard.appendChild(gatinhoNome);

  // inserir "gatinho__card" no "gatinhosContainer"
  gatinhosContainer.appendChild(gatinhoCard);

  gatinhosContainer.setAttribute('talita', 'deusa');

  form.reset();
})