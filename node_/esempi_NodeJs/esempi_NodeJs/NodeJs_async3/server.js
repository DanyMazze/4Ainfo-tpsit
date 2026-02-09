const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware per processare i dati JSON inviati nei POST
app.use(express.json());

// SERVIRE FILE STATICI
// Questo rende accessibile tutto ciò che è dentro la cartella "public"
// Se vai su http://localhost:3000/ vedrai index.html in automatico
app.use(express.static('public'));

// 1. ROTTA API SEMPLICE (GET)
app.get('/api/info', (req, res) => {
    res.json({ messaggio: "Benvenuto nelle API!", versione: "1.0.0" });
});

// 2. ROTTA CON PARAMETRO DINAMICO (GET)
// Il simbolo ":" indica una variabile (id)
app.get('/api/prodotti/:id', (req, res) => {
    const idProdotto = req.params.id;
    res.json({
        id: idProdotto,
        nome: `Prodotto Esempio ${idProdotto}`,
        descrizione: "Dati recuperati dinamicamente dalla rotta"
    });
});

// 3. ROTTA PER RICEVERE DATI (POST)
app.post('/api/feedback', (req, res) => {
    const dati = req.body;
    console.log("Ricevuto:", dati);
    res.status(201).json({ status: "Successo", ricevuto: dati });
});

// 4. ROTTA PER RICEVERE DATI (POST) BIS
app.post('/api/somma', (req, res) => {
  const { dato1, dato2 } = req.body;
  const somma = Number(dato1) + Number(dato2);
  console.log(`Somma di ${dato1} + ${dato2} = ${somma}`);
  res.json(somma); // meglio di res.send
});

// 5. ROTTA DI FALLBACK (404)
// Da mettere sempre alla FINE di tutte le altre rotte
app.use((req, res) => {
    res.status(404).send("<h1>404 - Pagina non trovata</h1>");
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

