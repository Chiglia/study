# QuizFlow

Applicazione Angular solo frontend per creare domande a scelta multipla e allenarsi con test casuali. Non richiede account o backend.

## Avvio

```bash
npm ci
npm start
```

Aprire `http://localhost:4200`. Per generare il sito statico: `npm run build`.

## Funzionamento

- La dashboard mostra i test e il pulsante Crea test, senza azioni per inserire domande o avviare sessioni.
- Crea test richiede un nome e apre la pagina dedicata `/test/:id`, dove aggiungere, cercare, filtrare e modificare le domande, rinominare o eliminare il test.
- Il pulsante Play (o Riprendi test) si trova nella pagina di modifica e apre `/test/:id/svolgi`.
- La sidebar mostra I miei test come elenco sempre aperto, seguito dagli ultimi due test modificati. Creazione, rinomina e modifiche alle domande aggiornano l'ordine; navigazione e risposte no.
- Ogni URL identifica il test: ricaricamento, link diretti e navigazione indietro ripristinano il contesto corretto. I precedenti percorsi `/domande` e `/test` reindirizzano al test selezionato, se presente.
- Domande, avanzamento, risultati e statistiche sono indipendenti per ogni test. Passare da un test a un altro conserva il punto di entrambi e anche la selezione viene salvata.
- Puoi eliminare un test con conferma (domande, sessione e risultati inclusi). Anche l'ultimo test puo essere eliminato; una nuova installazione parte senza test predefiniti.
- Creazione, modifica ed eliminazione di domande con 2–6 opzioni distinte e una sola risposta corretta.
- Ogni nuova sessione mescola solo le domande del test selezionato con Fisher–Yates.
- Selezionare una risposta la conferma immediatamente e mostra il feedback corretto/errato.
- Avanti rimuove le domande risposte; una domanda saltata va in fondo alla coda.
- Le domande risposte non ricompaiono nello stesso test, anche dopo un errore.
- Test, risposte, domande e risultati sono salvati in `localStorage` nella chiave `quizflow.data.v1`.
- La chiave resta invariata per compatibilita; il contenuto ora usa lo schema `version: 2` con raccolte e selezione attiva. I dati dello schema precedente vengono migrati automaticamente in "Il mio primo test", conservando domande, test in corso e risultati. Se la migrazione non puo essere salvata, i dati originali restano intatti e viene mostrato un errore.
- I test dello schema v2 precedente senza `modifiedAt` vengono conservati e ricevono il valore 0: compaiono fra i recenti solo dopo una modifica reale.
- Un test usa una copia della raccolta iniziale: modificare la raccolta non cambia un test in corso.
- La pagina del test mostra il risultato finale e permette di avviare un nuovo test.

## Dati locali

I dati sono disponibili solo sul browser e sull'origine utilizzati. Non sono sincronizzati fra dispositivi. Cancellare i dati del sito elimina anche la raccolta. La navigazione privata potrebbe non conservarli.

Gli errori di lettura/scrittura vengono mostrati esplicitamente. Una scrittura fallita non modifica lo stato corrente; dati corrotti non vengono sovrascritti automaticamente. Il ripristino richiede conferma ed elimina tutti i dati QuizFlow.

## Verifiche

```bash
npm test
npm run build
```

I test usano il runner integrato di Node (Node 24 o successivo) e verificano coda casuale, domande saltate, feedback, snapshot, migrazione, isolamento fra test e validazione dei dati persistenti. `rewriteRelativeImportExtensions` consente di condividere i moduli TypeScript puri fra build Angular e test Node senza un runner aggiuntivo.
