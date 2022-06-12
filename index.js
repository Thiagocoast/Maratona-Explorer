const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "A resposta não está no poder de alguém. Ela está no íntimo de cada um de vocês",
  "Não é importante a rapidez com que se aprende, mas que se aprenda.",
  "Uma pequena boa ação pode levar a uma grande recompensa.",
  "As pessoas podem ser muitas coisas.",
  "Às vezes o seu pior inimigo pode ser o seu maior aliado",
  "Aqueles que experimentam o poder uma vez nunca mais serão os mesmos.",
  "Triste não é mudar de ideia, mas sim não ter ideias para mudar",
  "Todas as coisas são possiveis para os que têm o coração livre de maldade.",
  "Quando tudo parecer perdido, procure o que reflete o que são e aquilo que mais desejam.",
  "O destino de um é partilhado por todos.",
  "Algumas vezes o melhor jeito de convencer alguém que está errado é deixá-lo seguir seu caminho.",
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 4000)
}