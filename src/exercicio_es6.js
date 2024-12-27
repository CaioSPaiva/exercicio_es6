
// Array de objetos com informações dos alunos
const alunos = [
    { nome: "Caio Paiva", nota: 7.0 },
    { nome: "Maria do Carmo", nota: 4.8 },
    { nome: "Antonio Carlos", nota: 6.7 },
    { nome: "Carla Paiva", nota: 8.5 },
    { nome: "Vinicius Salgado", nota: 5.0 },
    { nome: "Amanda Lopes", nota: 7.5 },
    { nome: "Elisangela de Camrago", nota: 9.0 },
    { nome: "Enzo Gabriel", nota: 5.5 }
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

// Variável para armazenar alunos aprovados
const alunosAprovados = filtrarAlunosAprovados(alunos);

// Exibição dos resultados
console.log("--- Todos os Alunos ---");
alunos.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
});

console.log("\n--- Alunos Aprovados ---");
alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
});

// Informações adicionais
console.log("\n--- Estatísticas ---");
console.log(`Total de alunos: ${alunos.length}`);
console.log(`Alunos aprovados: ${alunosAprovados.length}`);
console.log(`Porcentagem de aprovação: ${((alunosAprovados.length / alunos.length) * 100).toFixed(2)}%`);