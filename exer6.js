// Simula a entrada de dados
const notas = {
    primeiroBimestre: 7.5,
    segundoBimestre: 8.0,
    terceiroBimestre: 6.5,
    quartoBimestre: 9.0
};

function CalcularMedia(notasBimestrais) {
    const somaNotas =   notasBimestrais.primeiroBimestre + 
                        notasBimestrais.segundoBimestre
                        notasBimestrais.terceiroBimestre
                        notasBimestrais.quartoBimestre
    const media = somaNotas / 4
    return media;
}

function ExibirBoletim(notasAluno) {
    const mediaFinal = CalcularMedia(notasAluno);

    console.log("--- Boletim Escolar ---");
    console.log(`Notas:`);
    console.log(` 1° Bimestre: ${notasAluno.primeiroBimestre}`);
    console.log(` 2° Bimestre: ${notasAluno.segundoBimestre}`);
    console.log(` 3° Bimestre: ${notasAluno.terceiroBimestre}`);
    console.log(` 4° Bimestre: ${notasAluno.quartoBimestre}`);
    console.log("-----------------------");
    console.log(`Média Final: ${mediaFinal.toFixed(2)}`); // toFixed(2) formata para duas casas decimais
    console.log("-----------------------");

    if (mediaFinal >= 7.0) {
        console.log("Status: Aprovado!");
    } else {
        console.log("Status: Reprovado.");
    }
}

// Executa a função para exibir o boletim com as notas definidas
ExibirBoletim(notas);
