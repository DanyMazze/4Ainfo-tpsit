
const {existsSync,readFileSync,writeFileSync} = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static('public'));

let rubrica = [];
const file = './rubrica.json';
if (!existsSync(file)) {
  writeFileSync(file, JSON.stringify(rubrica, null, 2));
}
rubrica = JSON.parse(readFileSync(file, 'utf-8'));

app.get('/vedi', (req, res) => {
   console.log("visualizza rubrica");
   res.json(rubrica); 
});

app.post('/aggiungi', (req, res) => {
   const { nome, cognome, telefono, email } = req.body;
   rubrica.push({ nome, cognome, telefono, email });
   writeFileSync(file, JSON.stringify(rubrica, null, 2));
   console.log("aggiunto nominativo in rubrica");
   res.status(201).json({ messaggio: "Contatto aggiunto!", dati: rubrica });});

app.post('/cancella', (req, res) => {
   const { via } = req.body;
   rubrica = rubrica.filter(contatto => contatto.nome !== via);
   writeFileSync(file, JSON.stringify(rubrica, null, 2));
   console.log("cancellato nominativo in rubrica");
   res.json({ messaggio: "Contatto rimosso!", dati: rubrica });  
});

app.use((req, res) => {
    res.status(404).send("<h1>404 - Pagina non trovata</h1>");
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

