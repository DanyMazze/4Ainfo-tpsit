const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const {readFileSync,writeFileSync}=require('fs');


// Middleware per processare i dati JSON inviati nei POST
app.use(express.json());

// SERVIRE FILE STATICI
// Questo rende accessibile tutto ciò che è dentro la cartella "public"
// Se vai su http://localhost:3000/ vedrai index.html in automatico
app.use(express.static('public'));

app.post('/api/rubrica', (req, res) => {
    // 1. Leggiamo il testo dal file e lo trasformiamo in array
    const datiFile = readFileSync('rubrica.json', 'utf8');
    const rubricaArray = JSON.parse(datiFile);

    // 2. Aggiungiamo il nuovo contatto ricevuto dal Client (es. tramite un form)
    const nuovoContatto = req.body;
    rubricaArray.push(nuovoContatto);

    // 3. Ritrasformiamo l'array in testo e sovrascriviamo l'intero file
    writeFileSync('rubrica.json', JSON.stringify(rubricaArray));

    // Diamo conferma al Client
    res.json({ messaggio: "Contatto aggiunto con successo!" });
});

app.delete('/api/rubrica/:id', (req, res) => {
    // 1. Leggiamo e decodifichiamo il file
    const datiFile = readFileSync('rubrica.json', 'utf8');
    let rubricaArray = JSON.parse(datiFile);

    // 2. Leggiamo l'ID da cancellare direttamente dal link (es. /api/rubrica/3)
    const idDaCancellare = Number(req.params.id);

    // 3. Il colino in azione! Teniamo solo chi NON ha quell'ID
    rubricaArray = rubricaArray.filter(contatto => contatto.id !== idDaCancellare);

    // 4. Sovrascriviamo il file con l'array aggiornato
    writeFileSync('rubrica.json', JSON.stringify(rubricaArray));

    res.json({ messaggio: "Contatto eliminato con successo!" });
});

app.put('/api/rubrica/:id', (req, res) => {
    const datiFile = readFileSync('rubrica.json', 'utf8');
    let rubricaArray = JSON.parse(datiFile);

    const idDaModificare = Number(req.params.id);
    
    // 1. Troviamo dove si trova il contatto
    const indice = rubricaArray.findIndex(c => c.id === idDaModificare);

    if (indice !== -1) {
        // 2. Aggiorniamo i dati mantenendo lo stesso ID
        rubricaArray[indice] = { id: idDaModificare, ...req.body };

        // 3. Salviamo su file
        writeFileSync('rubrica.json', JSON.stringify(rubricaArray, null, 2));
        res.json({ messaggio: "Contatto aggiornato!" });
    } else {
        res.status(404).json({ messaggio: "Contatto non trovato" });
    }
});

app.use((req, res) => {
    res.status(404).send("<h1>404 - Pagina non trovata</h1>");
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

