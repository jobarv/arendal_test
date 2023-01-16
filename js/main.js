let btnReparte = document.getElementById('dame');
let btnReiniciar = document.getElementById('Reiniciar');
let cartas = [];
let cartajugar = document.getElementById('mazo')

btnReiniciar.addEventListener("click", reiniciarJuego)

btnReparte.onclick = function () {
    reparte = "dame"
    iniciarJuego(reparte)
}

function iniciarJuego() {
    dame();
}

function reiniciarJuego() {
    location.reload();
}

function dame() {
    let num = Math.floor((Math.random() * (55 - 1)) + 1);
    if (cartas.length == 54) {
        isTableroselected = false

    } else if (cartas.indexOf(num) == -1) {
        cartas.push(num);
        cartajugar.src = `img/${num}.jpg`
        if (casillaPlayer1 != null) {
            casillaPlayer1.removeAttribute('disabled');
        }
    } else {
        dame();
    }

}


