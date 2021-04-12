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

for (var i = 0; i < 5; i++) {
    var numero = Math.floor(Math.random() * 100) + 1;
    numeriRandom.push(numero);
}

alert(numeriRandom);

// Timer di 30 secondi


