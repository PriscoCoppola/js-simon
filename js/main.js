/*
 * JS Simon v 0.1.0
 * 
 * Un alert() espone 5 numeri generati casualmente.
 * Da li parte un timer di 30 secondi.
 * Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

// Alert 5 numeri casuali

var numeriRandom = [];
var counter = 0;
var size = 5;

while (counter < size) {
    var numero = Math.floor(Math.random() * 100) + 1;
    numeriRandom.push(numero);

    counter++;
}

alert(numeriRandom);

// Timer di 30 secondi
var secondi = 30;

var id = setInterval(function() {
    if (secondi === 0) {
        clearInterval(id);
        
        // Chiedere all'utente di inserire i numeri visti precedentemente
        var numeriUser = [];
        
        for (var i = 1; i <= size; i++) {
            var user = parseInt(prompt('Inserisci numero ' + i + ' di ' + size))
            numeriUser.push(user);
        }
        
        // Numeri indovinati
        var numeriIndovinati = [];

        for (var i = 0; i < numeriUser.length; i++) {
            if (numeriRandom.includes(numeriUser[i])) {
                numeriIndovinati.push(numeriUser[i]);
            }
        }

        // Numeri sbagliati
        var numeriSbagliati = [];
        
        for (var i = 0; i < numeriUser.length; i++) {
            if (! numeriRandom.includes(numeriUser[i])) {
                numeriSbagliati.push(numeriUser[i]);
            }
        }
        
        // Stampa risultato
        console.log('Hai indovinato ' + numeriIndovinati.length + ' numeri su ' + size + '. ' + 'Cioè ' + numeriIndovinati);
        console.log('Non hai indovinato ' + numeriSbagliati.length + ' numeri su ' + size + '. ' + 'Cioè ' + numeriSbagliati);

    } else {
        secondi--;
    }
}, 1000)




