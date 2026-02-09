const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const {readFileSync,writeFileSync,appendFileSync}=require('fs');


// Middleware per processare i dati JSON inviati nei POST
app.use(express.json());

// SERVIRE FILE STATICI
// Questo rende accessibile tutto ciò che è dentro la cartella "public"
// Se vai su http://localhost:3000/ vedrai index.html in automatico
app.use(express.static('public'));

app.post('/api/aggiungi', (req, res) => {
    const dati = req.body;
    console.log("Dati ricevuti:", dati);
    const file = 'contatti.json';
    try {
        let contenuto = '';
        try {
            contenuto = readFileSync(file, 'utf-8');
        } catch (e) {
            // file potrebbe non esistere ancora
            contenuto = '';
        }

        let lista = [];
        if (contenuto) {
            try {
                lista = JSON.parse(contenuto);
                if (!Array.isArray(lista)) lista = [];
            } catch (e) {
                // fallback: file in formato NDJSON (una riga JSON per contatto)
                lista = [];
                for (const line of contenuto.split(/\r?\n/)) {
                    const l = line.trim();
                    if (!l) continue;
                    try {
                        lista.push(JSON.parse(l));
                    } catch (e) {
                        // ignora righe non-JSON
                    }
                }
            }
        }

        lista.push(dati);
        writeFileSync(file, JSON.stringify(lista, null, 2), 'utf-8');
        res.status(200).json({ message: 'Contatto aggiunto', dati });
    } catch (err) {
        console.error('Errore salvataggio contatto:', err);
        res.status(500).json({ error: 'Errore salvataggio contatto' });
    }
});

app.use((req, res) => {
    res.status(404).send("<h1>404 - Pagina non trovata</h1>");
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

