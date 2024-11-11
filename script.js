// Criação do banco de dados
const db = {
  scores: []
};

// Função para salvar pontuações no banco de dados
function saveScore(name, score) {
  db.scores.push({ name, score });
  localStorage.setItem('scores', JSON.stringify(db.scores));
}

// Função para recuperar pontuações do banco de dados
function getScores() {
  return JSON.parse(localStorage.getItem('scores')) || [];
}
```
*Envio de Dados para o Banco de Dados*

No arquivo `index.html`, adicione o seguinte código após o jogo terminar:
```
// Envia dados para o banco de dados
fetch("https://api.sheetmonkey.io/form/pJZCcZ9aABKDXHJCQmbDrc", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "nome": nomeJogador,
    "acertos": acertos,
    "erros": erros,
    "tempo": tempo.toFixed(2),
    "velocidade": velocidade,
    "velocidadeMinha": velocidadeMinha.toFixed(2)
  })
}).then(() => {
  saveScore(nomeJogador, velocidadeMinha.toFixed(2));
});

const musicaFundo = document.getElementById('musica-fundo');

// Função para pausar/resumir música
function toggleMusica() {
  if (musicaFundo.paused) {
    musicaFundo.play();
  } else {
    musicaFundo.pause();
  }
}

// Pausa música quando começa a jogar
comecarButton.addEventListener("click", () => {
  musicaFundo.pause();
});

// Resumir música quando termina de jogar
enviarButton.addEventListener("click", () => {
  musicaFundo.play();
});

