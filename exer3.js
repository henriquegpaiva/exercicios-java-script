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
