let btnReparte = document.getElementById('correla');
let btnReiniciar = document.getElementById('Reiniciar');
let cartas = [];
let cartajugar = document.getElementById('mazo')

btnReiniciar.addEventListener("click", reiniciarJuego)

btnReparte.onclick = function () {
    reparte = "correla"
    iniciarJuego(reparte)
}

function iniciarJuego() {
    correla();
}

function reiniciarJuego() {
    location.reload();
}

function correla() {
    let num = Math.floor((Math.random() * (55 - 1)) + 1);
    if (cartas.indexOf(num) == -1) {
        cartas.push(num);
        cartajugar.src = `img/${num}.jpg`
    } else {
        correla();
    }

}


