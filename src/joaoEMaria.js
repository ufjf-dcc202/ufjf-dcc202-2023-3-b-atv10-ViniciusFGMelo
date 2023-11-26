let maria = 2;
let joao = 1;

function getMaria() {
  return maria;
}

function getJoao() {
  return joao;
}

function setMaria(m) {
  maria = m;
}

function setJoao(j) {
  joao = j;
}

function deJoaoParaMaria() {
  setMaria(maria + joao);
  setJoao(0);
}

function deMariaParaJoao() {
  setJoao(joao + maria);
  setMaria(0);
}

export { getMaria, getJoao, setMaria, setJoao, deJoaoParaMaria, deMariaParaJoao };