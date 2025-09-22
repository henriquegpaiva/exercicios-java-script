const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let despesas = {};
let categorias = [
    "Moradia (Aluguel/Prestação)",
    "Alimentação (Supermercao/Feira)",
    "Transporte (Combustivel)",
    "Laser (Passeio/Cinema)",
    "Contas (Luaz, Água, Internet, Telefone)",
    "Educação (Mensalidade/Curso)"
];

let nomesChaves = [
    "Moradia",
    "Alimentação",
    "Transporte",
    "Laser",
    "Contas",
    "Educação"
];

let index = 0;

console.log("--- Resgistro de Despesas Pessoais ---");
console.log("Por favor, informe o valor para cada categoria, digite 0 se não hover despesas nesta categoria.");

function Perguntar() {
    if (index < categorias.length) {
        rl.question(`Valor de ${categorias[index]}: R$ `, (resposta) => {
            despesas[nomesChaves[index]] = parseFloat(resposta);
            index++;
            Perguntar();
        });
    } else {
        MostrarResultados();
        rl.close();
    }
}

function MostrarResultados() {
    console.log("\n--- Despesas Registradas ---");
    for (const categoria in despesas) {
        if (!isNaN(despesas[categoria]) && despesas[categoria] >= 0) {
            console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R$ ${despesas[categoria].toFixed(2)}`);
        } else {
            console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: Valor Inválido`);
            despesas[categoria] = 0;
        }
    }
    console.log("----------------------------");

    let totalDespesas = 0;
    let numerosCategoriasComDespesas = 0;

    for (const categoria in despesas) {
        if (!isNaN(despesas[categoria]) && despesas[categoria] >= 0) {
            totalDespesas += despesas[categoria];
            if (despesas[categoria] > 0) {
                numerosCategoriasComDespesas++;
            }
        }
    }

    console.log(`Total de Despesas: R$ ${totalDespesas.toFixed(2)}`);
    if (numerosCategoriasComDespesas > 0) {
        let mediaDespesas = totalDespesas / numerosCategoriasComDespesas;
        console.log(`Média de Despesas por Categoria com Gasto: R$ ${mediaDespesas.toFixed(2)}`);
    }
    console.log("============================");
}

Perguntar()
