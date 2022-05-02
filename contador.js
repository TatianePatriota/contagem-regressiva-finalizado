const segundos = document.getElementById("segundos");
const minutos = document.getElementById("minutos");
const horas = document.getElementById("horas");
const dias = document.getElementById("dias");

const editaDigito = (digito) => `0${digito}`.slice(-2);

const atualizarTempo = (tempo) => {
  const quantidadeDeDias = Math.floor(tempo / (60 * 60 * 24));
  const quantidadeDeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
  const quantidadeDeMinutos = Math.floor((tempo % (60 * 60)) / 60);
  const quantidadeDeSegundos = tempo % 60;

  dias.textContent = editaDigito(quantidadeDeDias);
  horas.textContent = editaDigito(quantidadeDeHoras);
  minutos.textContent = editaDigito(quantidadeDeMinutos);
  segundos.textContent = editaDigito(quantidadeDeSegundos);
};

const contagemRegressiva = (tempo) => {
  const pararContagem = () => clearInterval(id);
  const contagem = () => {
    if (tempo === 0) {
      pararContagem();
    }
    atualizarTempo(tempo);
    tempo--;
  };
  const id = setInterval(contagem, 1000);
};

const lancamentoFilme = () => {
  const diaDaEstreia = new Date("2022-06-02 00:00:00");
  const diaAtual = Date.now();
  return Math.floor((diaDaEstreia - diaAtual) / 1000);
};

contagemRegressiva(lancamentoFilme());
