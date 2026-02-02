
const {readFileSync,writeFileSync,appendFileSync}=require('fs');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var express = require('express');
var app = express();

const frasiBiscottoFortuna = [
  {
    testo: "Un piccolo cambiamento oggi porterà grandi risultati domani.",
    usi: 0
  },
  {
    testo: "La pazienza è la chiave che apre tutte le porte.",
    usi: 0
  },
  {
    testo: "Un incontro inaspettato illuminerà la tua giornata.",
    usi: 0
  },
  {
    testo: "Segui il tuo istinto: conosce la strada.",
    usi: 0
  },
  {
    testo: "La fortuna favorisce chi osa.",
    usi: 0
  },
  {
    testo: "Un sorriso sincero tornerà indietro moltiplicato.",
    usi: 0
  },
  {
    testo: "Presto riceverai una buona notizia.",
    usi: 0
  },
  {
    testo: "Ogni viaggio inizia con un solo passo.",
    usi: 0
  },
  {
    testo: "La tua creatività sta per essere premiata.",
    usi: 0
  },
  {
    testo: "Ascolta più di quanto parli: imparerai molto.",
    usi: 0
  },
  {
    testo: "Un desiderio espresso in silenzio sta per avverarsi.",
    usi: 0
  },
  {
    testo: "La felicità si trova nelle cose semplici.",
    usi: 0
  },
  {
    testo: "Un vecchio problema troverà finalmente soluzione.",
    usi: 0
  },
  {
    testo: "Fidati di chi dimostra, non solo di chi promette.",
    usi: 0
  },
  {
    testo: "La tua gentilezza farà la differenza oggi.",
    usi: 0
  },
  {
    testo: "Nuove opportunità nasceranno da una scelta coraggiosa.",
    usi: 0
  },
  {
    testo: "Il momento giusto è più vicino di quanto pensi.",
    usi: 0
  },
  {
    testo: "Lascia andare ciò che non ti serve più.",
    usi: 0
  },
  {
    testo: "La fortuna ti sta osservando: sii pronto.",
    usi: 0
  },
  {
    testo: "Oggi è un buon giorno per credere in te stesso.",
    usi: 0
  }
];

const proverbiItaliani = [
  { testo: "Chi dorme non piglia pesci.", usi: 0 },
  { testo: "Meglio tardi che mai.", usi: 0 },
  { testo: "Il lupo perde il pelo ma non il vizio.", usi: 0 },
  { testo: "Non è tutto oro quel che luccica.", usi: 0 },
  { testo: "Tra il dire e il fare c’è di mezzo il mare.", usi: 0 },
  { testo: "Ride bene chi ride ultimo.", usi: 0 },
  { testo: "A caval donato non si guarda in bocca.", usi: 0 },
  { testo: "Chi va piano va sano e va lontano.", usi: 0 },
  { testo: "L’abito non fa il monaco.", usi: 0 },
  { testo: "Prevenire è meglio che curare.", usi: 0 },
  { testo: "Gallina vecchia fa buon brodo.", usi: 0 },
  { testo: "Chi troppo vuole nulla stringe.", usi: 0 },
  { testo: "Il mattino ha l’oro in bocca.", usi: 0 },
  { testo: "Meglio soli che male accompagnati.", usi: 0 },
  { testo: "Tanto va la gatta al lardo che ci lascia lo zampino.", usi: 0 },
  { testo: "Volere è potere.", usi: 0 },
  { testo: "Paese che vai, usanza che trovi.", usi: 0 },
  { testo: "Sbagliando s’impara.", usi: 0 },
  { testo: "Il gioco non vale la candela.", usi: 0 },
  { testo: "Chi di speranza vive, disperato muore.", usi: 0 }
];

app.get('/',function(req,res){
   res.send('devi fornirmi un sottoindirizzo');
   console.log('indirizzo sbagliato');
});  
 
app.get('/cookie',function(req,res){
   const numeroCasuale = randomInt(0, 19); 
   res.send(frasiBiscottoFortuna[numeroCasuale].testo);
   frasiBiscottoFortuna[numeroCasuale].usi++;
   console.log('estratto cookie '+frasiBiscottoFortuna[numeroCasuale].testo);
});   
app.get('/esporta_cookie',function(req,res){
	writeFileSync('./cookie,json',JSON.stringify(frasiBiscottoFortuna, null, 2));
    res.send("ho esportato i cookie");
    console.log("ho esportato i cookie");
});
app.get('/conta_cookie',function(req,res){
   let testo = "";
   for (let i = 0; i < frasiBiscottoFortuna.length; i++) {
      testo += frasiBiscottoFortuna[i].testo + " — usi: " + frasiBiscottoFortuna[i].usi + "<br>";
   }
   res.send(testo);
   console.log('ho contato i cookie');
});   

app.get('/proverbi',function(req,res){
   const numeroCasuale = randomInt(0, 19); 
   res.send(proverbiItaliani[numeroCasuale].testo);
   proverbiItaliani[numeroCasuale].usi++;
   console.log('estratto proverbi '+proverbiItaliani[numeroCasuale].testo);
});   
app.get('/esporta_proverbi',function(req,res){
   let testo = "";
   for (let i = 0; i < proverbiItaliani.length; i++) {
      testo += proverbiItaliani[i].testo + " — usi: " + proverbiItaliani[i].usi + "\n";
   }
   writeFileSync('./proverbi.txt',testo);
   res.send("ho esportato i proverbi");
   console.log("ho esportato i proverbi");
});
app.get('/conta_proverbi',function(req,res){
   let testo = "";
   for (let i = 0; i < proverbiItaliani.length; i++) {
      testo += proverbiItaliani[i].testo + " — usi: " + proverbiItaliani[i].usi + "<br>";
   }
   res.send(testo);
   console.log('ho contato i proverbi');
});   

app.use(function (req, res) {
  res.status(404).send('404 - Indirizzo inesistente');
  console.log('Tentativo di accesso a indirizzo inesistente:', req.originalUrl);
});
 
app.listen(3000,function(){
   console.log('server running on port 3000');
})
