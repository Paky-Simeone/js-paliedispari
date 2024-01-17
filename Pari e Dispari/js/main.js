// Dichiaro constanti e stampo in console
const pariodispari = prompt('scegli pari o dispari');
console.log(pariodispari);
const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log("il numero dell'utente è: " + numeroUtente);
let valore;


// Controllo se il numero utente è effettivamente un numero o meno
if(isNaN(numeroUtente)){
    alert('il valore inserito non è un numero, riprova.');
}


// Creo funzione per generare un numero random
function getRandomNumber(min, max){
    const numeroRandom = Math.floor(Math.random() * (max - min +1) + min);
    return numeroRandom;
}

// Dichiaro e stampo in console il numero random della cpu 
const numerocpu = getRandomNumber(1, 5);
console.log('il numero della cpu è: ' + numerocpu);

// Faccio la somma del numero utente più il numero della cpu
let numerofinale = numeroUtente + numerocpu;
console.log('la somma di utente e cpu è: ' + numerofinale);

// Creo una funzione che controlla se il numero è pari o dispari
function getParioDispari(numero){
    if(numero % 2 == 0){
        // alert('la somma è pari');
        valore = 'pari';
        console.log('il numero finale è pari');
    }else{
        // alert('la somma è dispari');
        valore = 'disap'
        console.log('il numero finale è dispari');
    }

    return numero % 2 == 0;
}

console.log(getParioDispari(numerofinale));

// Stampo il vincitore
if(pariodispari == valore){
    alert('utente vincitore');
}
else {
    alert('pc vincitore');
}