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

app.post('api/rubrica/modifica', (req, res) => {
    const { id, nome, cognome, telefono, email } = req.body;
    if (!id || !nome || !cognome || !telefono || !email) {
        return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
    }

    const contatti = JSON.parse(readFileSync('rubrica.json', 'utf-8'));
    const contattoIndex = contatti.findIndex(c => c.id === id);
    if (contattoIndex === -1) {
        return res.status(404).json({ error: 'Contatto non trovato' });
    }

    contatti[contattoIndex] = { id, nome, cognome, telefono, email };
    writeFileSync('rubrica.json', JSON.stringify(contatti, null, 2));
    res.json(contatti[contattoIndex]);
});

app.post('/api/rubrica/cancella', (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ error: 'ID è obbligatorio' });
    }
    
    const contatti = JSON.parse(readFileSync('rubrica.json', 'utf-8'));
    const contattoIndex = contatti.findIndex(c => c.id === id);
    if (contattoIndex === -1) {
        return res.status(404).json({ error: 'Contatto non trovato' });
    }

    contatti.splice(contattoIndex, 1);
    writeFileSync('rubrica.json', JSON.stringify(contatti, null, 2));
    res.json({ message: 'Contatto cancellato' });
});

app.use((req, res) => {
    res.status(404).send("<h1>404 - Pagina non trovata</h1>");
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});


