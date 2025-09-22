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
