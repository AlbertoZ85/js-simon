// var artist = null; //artist vuoto vuol dire false
// console.log(artist);
//
// var artistA = (artist || []);
//
// console.log(artistA);

// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. Dichiarazione/inizializzazione delle variabili
var arrPc = [],
    arrUser = [],
    n = 5, // lunghezza array, per mantenere una certa generalità
    numPc,
    numUser,
    arrGuessed = []; // array in cui salvo gli input indovinati dall'utente

// 2. Genero 5 numeri casuali senza ripetizioni e li salvo in un array (uso un ciclo WHILE perché non conosco il numero esatto di cicli da eseguire per via del controllo sulle ripetizioni)
while (arrPc.length < n) {
    numPc = numRandom(1,100);
    if (!arrPc.includes(numPc)) {
        arrPc.push(numPc);
    }
}

// console.log('Array PC',arrPc);

// 3. Visualizzazione del box di alert con i 5 numeri così generati
alert('Memorizza questi 5 numeri: ' + arrPc);

// 4. Imposto un conto alla rovescia di 30 secondi (che iniziano a scorrere dopo che l'utente ha premuto OK sull'alert box), visibile alla console. Allo scadere del tempo viene eseguita la funzione 'guess'
var clock = setInterval(conteggio,1000);
var i = 30;

function conteggio() {
    console.log(i--);
    if (i < 0) {
        clearInterval(clock);
        guess();
    }
}


// *** FUNZIONI *** //
// a. Funzione che genera un numero casuale in un dato intervallo (estremi compresi)
function numRandom(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// b. Funzione 'guess' che gestisce il gioco
function guess() {
    for (var i = 0; i < n; i++) { // uso un ciclo FOR perché so esattamente che l'array avrà n elementi

        // chiedo all'utente di inserire un numero fino a riempire l'array
        numUser = parseInt(prompt('Prova a indovinare uno dei numeri che hai appena visto'));

        // effettuo un controllo sull'input dell'utente, affinché non digiti un numero già inserito
        while (arrUser.includes(numUser)) {
            numUser = parseInt(prompt('Hai già inserito questo numero, riprova!'));
        }

        // se il numero non è già stato precedentemente inserito, salvo l'input dell'utente nel suo array
        arrUser.push(numUser);

        // se il numero corrisponde a uno dei numeri casuali del PC, lo salvo nell'array dei numeri indovinati
        if (arrPc.includes(numUser)) {
            arrGuessed.push(numUser);
        }
    }

    // Uso lo switch case per divertirmi a visualizzare messaggi diversi a seconda dell'esito del gioco
    switch (arrGuessed.length) {
        case 1:
            console.log('Tze, solo 1 numero?',arrGuessed);
            break;
        case 2:
            console.log('Hai centrato solo 2 numeri:',arrGuessed,'. Non gasarti troppo.');
            break;
        case 3:
            console.log('Beh dai, 3 numeri, non male...',arrGuessed);
            break;
        case 4:
            console.log('Complimenti, 4 numeri indovinati!',arrGuessed);
            break;
        case 5:
            console.log('Che memoria da elefante!',arrGuessed);
            break;
        default: console.log('Che scarso! Non hai indovinato alcun numero!');
    }
}
