const horas = document.querySelector('.hour');
const minutos = document.querySelector('.minute');
const segundos = document.querySelector('.second');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

})