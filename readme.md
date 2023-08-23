**Traccia**

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

**Svolgimento**

- recupero la posizione dove avverrà il countdown sul Dom tramite l'id
- definisco una variabile con la data alla quale voglio arrivare (2023-08-24 09:30) e la trasformo in millisecondi

- Creerò una funzione che si attiverà ogni secondo nella quale: 
    - assegnerò a una variabile la data di quell'esatto momento convertita in millisecondi.
    - vedrò la distanza fra il momento attuale e la data alla quale voglio arrivare e le assegnerò una variabile.
    - calcolerò la differenza approssimativa che c'è tra la differenza e i giorni, ore, minuti e secondi

    - mando nel dom le varie differenze in quel dato momento e siccome la funzione ripartirà ogni secondo, mostrerà un countdown verso la data prestabilita

- se la differenza tra la data di arrivo e adesso dovesse essere inferiore a 0 significa che il contdown è finito quindi fermerò la funzione.