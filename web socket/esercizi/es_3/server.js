const express = require('express');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log('Listening on 3000'));

const { Server } = require('ws');
const ws_server = new Server({ server });

let quale = 0;
let griglia = [];
for (let i = 0; i < 300; i++) {
  griglia[i] = '';          // '' = casella non ancora colorata
}
let rossi = 0;
let blu = 0;
let vincitore = '';

ws_server.on('connection', (ws) => {
  console.log('New client connected!');

  quale++;
  ws.id = quale;

  // chi entra in ritardo riceve le caselle già colorate
  for (let i = 0; i < 300; i++) {
    if (griglia[i] != '') {
      const position = { ti: i, colore: griglia[i], vincitore: '' };
      ws.send(JSON.stringify({ position: position }));
    }
  }

  ws.on('close', () => console.log('Client has disconnected!'));

  ws.on('message', function (message) {
    const arriva = JSON.parse(message);
    const i = arriva.manda.pos;

    // partita finita o casella già occupata: non succede niente
    if (vincitore != '' || griglia[i] != '') {
      return;
    }

    let colore;
    if (ws.id % 2 == 0) {
      colore = 'blue';
      blu++;
    } else {
      colore = 'red';
      rossi++;
    }
    griglia[i] = colore;

    if (rossi == 150) vincitore = 'red';
    if (blu == 150) vincitore = 'blue';

    const position = { ti: i, colore: colore, vincitore: vincitore };
    const data = JSON.stringify({ position: position });
    ws_server.clients.forEach((client) => {
      client.send(data);
    });
  });
});