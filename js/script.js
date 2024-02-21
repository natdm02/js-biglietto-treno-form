 // variabile BUTTON 'GENERA'
var buttonGenera = document.getElementById('genera');


 //click BUTTON 'genera'
buttonGenera.addEventListener( 'click',
function() {

 // var nome dell'utente 
    var inputNome = document.getElementById("nome-utente").value;
    
 // var età dell'utente 
    var inputEta = document.getElementById("fascia-eta").value;

 // var km    
    var inputKm = document.getElementById("km");

    var percorrenza = parseInt(inputKm.value);

    var prezzoAlKilometro = 0.21;
    var prezzoBiglietto = prezzoAlKilometro * percorrenza;
    var offerta = "Tariffa Standard";

 // calcolo costo biglietto con sconti del 20 e 40% 

    if (inputEta == "minorenne") {
        prezzoBiglietto -= (prezzoBiglietto * 20 / 100); 
        offerta = "Sconto Minorenne";
    } else if (inputEta == "over65") {
        prezzoBiglietto -= (prezzoBiglietto * 40 / 100);
        offerta = "Sconto Maggiorenne";   
    } 
    
 //numero random per carrozza 
    var carrozza = Math.floor(Math.random() * 9) +1; 
    var cp = Math.floor(Math.random() * (100000 - 90000 + 1 )) + 90000;  
    
 //stampiamo
    document.getElementById('nome-passeggero').innerHTML = inputNome;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto.toFixed(2) + " Euro" 
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = cp;

    var bigliettoStampato = document.getElementById('biglietto');
    bigliettoStampato.classList.remove('hidden');
    bigliettoStampato.classList.add('show');
});