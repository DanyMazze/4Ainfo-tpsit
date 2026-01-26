// Riscrivere l'esercizio su cookies e proverbi usando Express, 
// con in più la possibilità di avere una statistica su quante estrazioni casuali sono state fatte
//  per ciascuna frase e la possibilità di esportare gli elenchi in JSON.

var express = require('express');
var app = express(); // create an instance of express (server)
// npm i express --> to install express module on terminal
let cookie_estractions = 0;
let proverbio_estractions = 0;
app.get('/',function(req,res){
    res.send('Benvenuto al server di cookies e proverbi! Usa /cookies per un cookie casuale e /proverbi per un proverbio casuale.');
});


app.get('/cookies', function(req, res) {
        let cookies = [
            "La pazienza è la virtù dei forti.",
            "Un viaggio di mille miglia inizia con un solo passo.",
            "La felicità non è una destinazione, ma un modo di viaggiare.",
            "Il successo è la somma di piccoli sforzi ripetuti giorno dopo giorno.",
            "Non aspettare il momento perfetto, cogli l'attimo e rendilo perfetto.",
            "La vita è come una bicicletta: per mantenere l'equilibrio devi muoverti.",
            "Ogni giorno è una nuova opportunità per cambiare la tua vita.",
            "La gentilezza è la lingua che i sordi possono sentire e i ciechi possono vedere.",
            "Non smettere mai di imparare, perché la vita non smette mai di insegnare.",
            "Il coraggio non è l'assenza di paura, ma la conquista di essa.",
            "Sii il cambiamento che vuoi vedere nel mondo.",
            "La creatività è l'intelligenza che si diverte.",
            "Non contare i giorni, fai in modo che i giorni contino.",
            "La vera ricchezza non si misura in denaro, ma in momenti felici.",
            "Il fallimento è solo l'opportunità di ricominciare in modo più intelligente.",
            "La vita è breve, sorridi finché hai i denti.",
            "Non lasciare che ieri occupi troppo di oggi.",
            "Il futuro appartiene a coloro che credono nella bellezza dei propri sogni.",
            "La gratitudine trasforma ciò che abbiamo in abbastanza.",
            "Ogni ostacolo è un'opportunità travestita."
        ];
        let randomIndex = Math.floor(Math.random() * cookies.length);
        cookie_estractions++;
        res.send(`Cookie estratto: ${cookies[randomIndex]}<br>Statistiche di estrazione:<br>Cookies estratti: ${cookie_estractions-(cookie_estractions / 2)}`);
});
app.get('/proverbi', function(req, res) {
        let proverbi = [
            "Chi dorme non piglia pesci.",
            "Meglio un uovo oggi che una gallina domani.",
            "Tra il dire e il fare c'è di mezzo il mare.",
            "Non è tutto oro quel che luccica.",
            "Chi va piano va sano e va lontano.",
            "L'abito non fa il monaco.",
            "Chi trova un amico trova un tesoro.",
            "Ride bene chi ride ultimo.",
            "Tutte le strade portano a Roma.",
            "La gatta frettolosa ha fatto i gattini ciechi.",
            "Non si può avere la botte piena e la moglie ubriaca.",
            "A caval donato non si guarda in bocca.",
            "Il mattino ha l'oro in bocca.",
            "Chi semina vento raccoglie tempesta.",
            "Lontano dagli occhi, lontano dal cuore.",
            "Non c'è due senza tre.",
            "Meglio soli che male accompagnati.",
            "La fortuna aiuta gli audaci.",
            "Chi ben comincia è a metà dell'opera.",
            "Occhio per occhio, dente per dente."
        ];
        let randomIndex = Math.floor(Math.random() * proverbi.length);
        proverbio_estractions++;
        res.send(`Proverbio estratto: ${proverbi[randomIndex]}<br>Statistiche di estrazione:<br>Proverbi estratti: ${proverbio_estractions -(proverbio_estractions / 2)}`);
});

    app.listen(3000,function(){
    console.log('server running on port 3000');
})
