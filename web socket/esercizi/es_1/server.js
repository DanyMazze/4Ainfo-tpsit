const express = require('express');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log('Listening on 3000'));

const { Server } = require('ws');

const ws_server = new Server({ server });

ws_server.on('connection', (ws) => {
  console.log('New client connected!');
  ws.on('close', () => console.log('Client has disconnected!'));
});

let pos = 0;   // quadrato attualmente rosso (0..4)
let dir = 1;   // +1 = verso destra, -1 = verso sinistra

setInterval(() => {
  pos = pos + dir;
  if (pos == 4 || pos == 0) {
    dir = -dir;   // arrivato a un estremo: inverte la direzione
  }

  ws_server.clients.forEach((client) => {
    client.send(pos);
  });
}, 500);
