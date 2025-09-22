// --- Registro das Despesas ---

let moradia = 1200;     // Valor do aluguel/prestação da casa
let alimentacao = 850;  // Gasto com supermercado e feira
let transporte = 300;   // Combustível, transporte público e etc.           
let lazer = 450;        // Passeios, cinema, etc.       
let contas = 600;       // Luz, água, internet, telefone
let educacao = 200;     // Mensalidade escolar, cursos
let pSaude = 1100;

console.log("\n")
console.log("--- Despesas Familiares Registradas ---");
console.log(`Moradia: ${moradia}`);
console.log(`Alimentacao: ${alimentacao}`);
console.log(`Transporte: ${transporte}`);
console.log(`Lazer: ${lazer}`);
console.log(`Contas: ${contas}`);
console.log(`Educacao: ${educacao}`);
console.log(`As despesas com Plano de Saúde é: R$ ${pSaude}`);
console.log("---------------------------------------");

// --- Cálculo do Total de Despesas ---

let totalDespesas = moradia + alimentacao + transporte + lazer + contas + educacao + pSaude;

console.log(`Total de Despesas: R$ ${totalDespesas}`)

// --- Cálculo dcalculadora:
// Declaração de variáveis - ISSO É APENAS UM COMENTÁRIO
let numero1 = 10;
let numero2 = 5;

// Operações Matemáticas
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

// Exibindo resultados no console
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
exer1.js:
    // Bem vindo ao meu programa JavaScript !!

    console.log("Meu Primeiro Programa");

    const idade = 15;

    console.log("A idade do emanoel é " + idade);
exer2.js:
// 1. Declare as variáveis
const nome  = 'Maria';
const idade = 30;
const cidade = 'Rio de Janeiro';

// 2. Use as variáveis para criar uma frase com Template Literal
const fraseCompleta = `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;

// 3. Imprima a frase no terminal
console.log(fraseCompleta);
exer3.js:
// Variável com a idade que será verificada
const idade = 25;

// Função que verifica a idade e retorna a mensagem
function PodeDirigir(idade) {
    if (idade >= 18) {
        console.log("Você pode tirar a carteira de motorista!");
    } else {
        console.log("Você ainda não tem idade para dirigir.");
    }
}

// Chama a função para executar a verificação
PodeDirigir(idade);
exer4.js:
/*

    Tipos de declarações de variáveis:

        - let;
        - var;
        - const.

        - let:
            - variável escopada;
            - acessivel apenas dentro do bloco definido;
            - valor mutavel.

            - Ex.:
                - Idade
                - Senha
        
        - var:
            - variável não escopada;
            - acessivel dentro do arquivo inteiro;
            - valor mutavel.

            - Ex.:
                - Idade;
                - Senha
        
        - const:
            - variável escopada;
            - acessivel apenas dentro do bloco definido;
            - valor imutavel.

            - Ex.:
                - PI (3,14);
                - Nascimento.
*/

// Declaaração de uma Variável "let"
let numero = 10;

if (numero > 5) {
    console.log(`\nO número --> ${numero} <-- é maior que 5`);
} else {
    console.log(`\nO número ${numero} é menor ou igual que 5`);
}
exer5.js:
// Importa o módulo 'readline' para ler dados digitados pelo usuário
const readline = require("readline");

// Cria a interface de leitura (enrtada e saída de dados)
const rl = readline.createInterface({
    input: process.stdin,  // define que a entrada será o teclado
    output: process.stdout // define que a saída será o console
})

// Faz uma pergunta ao usuário
rl.question("Digite um número: ", (resposta) => {
    // Converte a resposta (que vem como texto) para número
    const numero = Number(resposta);

    // Estrutura if/else para verificar se é maior ou não que 5
    if (numero > 5) {   
        console.log("O número é maior que 5");
    } else {
        console.log("O número é menor ou igual que 5");
    }

    // Fecha a interface de leitura (importante para encerrar o programa)
    rl.close()
})
exer6.js:
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
exer7-desafio01.js :
// ####################                    #################### //
// ####################      Desafio 01    #################### //
// ####################                    #################### //

// FAÇA A MÉDIA DE QUATRO IDADES

const idades = {
    emanoel: 15,
    leonardo: 17,
    felipe: 16,
    henrique: 15
}

const media = (idades.emanoel + idades.leonardo + idades.felipe + idades.henrique) / 4

exer8.js:
// --- Registro das Despesas ---

let moradia = 1200;     // Valor do aluguel/prestação da casa
let alimentacao = 850;  // Gasto com supermercado e feira
let transporte = 300;   // Combustível, transporte público e etc.           
let lazer = 450;        // Passeios, cinema, etc.       
let contas = 600;       // Luz, água, internet, telefone
let educacao = 200;     // Mensalidade escolar, cursos
let pSaude = 1100;

console.log("\n")
console.log("--- Despesas Familiares Registradas ---");
console.log(`Moradia: ${moradia}`);
console.log(`Alimentacao: ${alimentacao}`);
console.log(`Transporte: ${transporte}`);
console.log(`Lazer: ${lazer}`);
console.log(`Contas: ${contas}`);
console.log(`Educacao: ${educacao}`);
console.log(`As despesas com Plano de Saúde é: R$ ${pSaude}`);
console.log("---------------------------------------");

// --- Cálculo do Total de Despesas ---

let totalDespesas = moradia + alimentacao + transporte + lazer + contas + educacao + pSaude;

console.log(`Total de Despesas: R$ ${totalDespesas}`)

// --- Cálculo de Média de Despesas

// Para cálcular a média, precisamos saber quantas "categorias" de despesas temos.
// Neste exemplo, temos 6 categorias.
let numeroDeCategorias = 7
let mediaDespesas = totalDespesas / numeroDeCategorias;

console.log(`Média de Despesas por Categoria: R$ ${mediaDespesas.toFixed(2)}`) // .toFixed(2) formata para 2 casas decimais, ele arredonda para o número mais próximo, se maior que 5, arredonda pra cima
console.log("\n")
exer9.js:
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
exer10.js:
let a = 10;
let b = 10;

// Operadores aritiméticos
console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto:", a % b);

// Operadores relacionais
console.log("a é maior que b?", a < b);
console.log("a é menor que b?", a > b);
console.log("a é identico que b?", a === b);

// Operadores lógicos AND e OR
let condicao = (a > 0 && b > 0) || (a < 0);
console.log("Condição lógica:", condicao);
exer11.js:
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu peso (kg): ", (peso) => {
    rl.question("Digite sua altura (m): ", (altura) => {
        peso = parseFloat(peso);
        altura = parseFloat(peso);

        let imc = peso  / (altura * altura);
        console.log(`Seu IMC é: ${imc.toFixed(2)}`);

        if (imc < 18.5) {
            console.log("Classificação: Abaixo do peso");
        } else if (img < 30) {
            console.log("Classificação: Peso normal");
        } else if (img < 40) {
            console.log("Classificação: Sobrepeso");
        } else {
            console.log("Classificação: Obesidade");
        }
    });
});e Média de Despesas

// Para cálcular a média, precisamos saber quantas "categorias" de despesas temos.
// Neste exemplo, temos 6 categorias.
let numeroDeCategorias = 7
let mediaDespesas = totalDespesas / numeroDeCategorias;

console.log(`Média de Despesas por Categoria: R$ ${mediaDespesas.toFixed(2)}`) // .toFixed(2) formata para 2 casas decimais, ele arredonda para o número mais próximo, se maior que 5, arredonda pra cima
console.log("\n")
