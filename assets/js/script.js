const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const options = document.querySelectorAll('.option')
var locationAlreadyClicked = []

function random(min, max) {
    const num = Math.random() * (min + max) + min;
    return Math.floor(num)
}

function Mark(index) {
    for (let i = 0; i < locationAlreadyClicked.length; i++) { if (index == locationAlreadyClicked[i]) return alert('location already chosen choose anothers') }

    options[index].innerHTML = 'X'



    winCondictions()
    addIndexAtualInAList(locationAlreadyClicked, index)
    putOpponentNumberOnTheBoard()
    winCondictions()
}

function addIndexAtualInAList(lista, index) { lista.push(index) }

function putOpponentNumberOnTheBoard() {
    let opponent = random(0, 8)
    for (let i = 0; i < locationAlreadyClicked.length; i++) {
        if (opponent == locationAlreadyClicked[i]) return putOpponentNumberOnTheBoard()
    }

    options[opponent].innerHTML = 'O'

    locationAlreadyClicked.push(opponent)
}

function winCondictions() {
    if (options[0].innerHTML == 'X' && options[1].innerHTML == 'X' && options[2].innerHTML == 'X') document.write('vitoria')
    if (options[2].innerHTML == 'X' && options[1].innerHTML == 'X' && options[0].innerHTML == 'X') document.write('vitoria')
    if (options[3].innerHTML == 'X' && options[4].innerHTML == 'X' && options[5].innerHTML == 'X') document.write('vitoria')
    if (options[5].innerHTML == 'X' && options[4].innerHTML == 'X' && options[3].innerHTML == 'X') document.write('vitoria')
    if (options[6].innerHTML == 'X' && options[7].innerHTML == 'X' && options[8].innerHTML == 'X') document.write('vitoria')
    if (options[8].innerHTML == 'X' && options[7].innerHTML == 'X' && options[6].innerHTML == 'X') document.write('vitoria')
    if (options[0].innerHTML == 'X' && options[3].innerHTML == 'X' && options[6].innerHTML == 'X') document.write('vitoria')
    if (options[6].innerHTML == 'X' && options[3].innerHTML == 'X' && options[0].innerHTML == 'X') document.write('vitoria')
    if (options[1].innerHTML == 'X' && options[4].innerHTML == 'X' && options[7].innerHTML == 'X') document.write('vitoria')
    if (options[7].innerHTML == 'X' && options[4].innerHTML == 'X' && options[1].innerHTML == 'X') document.write('vitoria')
    if (options[2].innerHTML == 'X' && options[5].innerHTML == 'X' && options[8].innerHTML == 'X') document.write('vitoria')
    if (options[8].innerHTML == 'X' && options[5].innerHTML == 'X' && options[2].innerHTML == 'X') document.write('vitoria')
    if (options[0].innerHTML == 'X' && options[4].innerHTML == 'X' && options[8].innerHTML == 'X') document.write('vitoria')
    if (options[8].innerHTML == 'X' && options[4].innerHTML == 'X' && options[0].innerHTML == 'X') document.write('vitoria')
    if (options[2].innerHTML == 'X' && options[4].innerHTML == 'X' && options[6].innerHTML == 'X') document.write('vitoria')
    if (options[6].innerHTML == 'X' && options[4].innerHTML == 'X' && options[2].innerHTML == 'X') document.write('vitoria')
    if (options[0].innerHTML == 'X' && options[3].innerHTML == 'X' && options[6].innerHTML == 'X') document.write('vitoria')
    if (options[6].innerHTML == 'X' && options[3].innerHTML == 'X' && options[0].innerHTML == 'X') document.write('vitoria')
}