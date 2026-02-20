const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const {readFileSync,writeFileSync}=require('fs');

// Gestire una rubrica contenente per ciascun nominativo: nome, cognome, telefono, e-mail e un ID univoco;
//deve essere possibile inserire, modificare, cancellare, visualizzare.
//I dati dovranno essere letti e scritti su file JSON.



app.use(express.json());
app.use(express.static('public'));

app.post('/api/rubrica', (req, res) => {
    const { nome, cognome, telefono, email } = req.body;
    if (!nome || !cognome || !telefono || !email) {
        return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
    }

    const contatti = JSON.parse(readFileSync('rubrica.json', 'utf-8'));

    const ID  = contatti.length > 0 ? contatti[contatti.length - 1].ID + 1 : 1;

    const nuovoContatto = { id: ID, nome, cognome, telefono, email };
    contatti.push(nuovoContatto);
    writeFileSync('rubrica.json', JSON.stringify(contatti, null, 2));
    res.status(201).json(nuovoContatto);
});


app.use((req, res) => {
    res.status(404).send("<h1>404 - Pagina non trovata</h1>");
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});


