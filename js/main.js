const countdownPosition = document.getElementById('time-countdown');
const countdownWord = document.getElementById('scritta-per-countdown');


// Prendo la data di domani (data di arrivo) in millisecondi 
const countDownDate = new Date("2023-08-24 09:30").getTime();

// faccio il countdown
let countdown = setInterval( function() {

  // Prendo la data di oggi e la converto in millisecondi
  let now = new Date().getTime();

  // trovo la differenza tra la data di arrivo e adesso
  let distance = countDownDate - now;

  // Calcolo il tempo
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mando nel Dom il tempo rimanente
  countdownPosition.innerHTML = days + " Giorni - " + hours + " Ore - "
  + minutes + " Minuti - " + seconds + " Secondi";

  // quando finisce il countdown (quando la differenza tra la data di arrivo e quella di "adess") è 
  if (distance < 0) {
    clearInterval(countdown);
    countdownWord.classList.add('d-none');
    countdownPosition.innerHTML = "E\' ora di andare a lezione";
    countdownPosition.classList.add('fs-1');
    
  }
}, 1000);