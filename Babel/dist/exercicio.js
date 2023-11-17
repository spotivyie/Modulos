const nomeDoAluno = nome => {
  let notaDoAluno = '';
  for (let i = 0; i < notas.length; i++) {
    if (nome === notas[i].nome) {
      notaDoAluno = nota;
    }
  }
};
const notas = [{
  nome: 'julia',
  nota: 5
}, {
  nome: 'juliana',
  nota: 6
}, {
  nome: 'paula',
  nota: 10
}, {
  nome: 'joão',
  nota: 3
}, {
  nome: 'carlos',
  nota: 8
}];
const filtraNotas = notas.filter(function (item) {
  return item.nota >= 6;
});
console.log(filtraNotas);