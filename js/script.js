// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.

// *** FUNZIONI *** //
// a. Funzione che genera un numero casuale in un dato intervallo (estremi compresi)
function numRandom(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// b. Funzione che verifica la presenza di un numero all'interno di un array
function checkNum(arr,num) {
    var i = 0;
    while (i < arr.length) {
        if (num == arr[i]) {
            return true;
        }
        i++;
    }
    return false;
}
