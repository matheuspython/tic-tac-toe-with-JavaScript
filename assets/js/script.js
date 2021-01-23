const tabuleiro = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const opcoes = document.querySelectorAll('.opcao')

function marcar(indice) {
    opcoes[indice].innerHTML = 'X'
}