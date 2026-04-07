const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/webhook', (req, res) => {
  const incomingMsg = (req.body.Body || '').trim().toLowerCase();

  let response = '';

  if (incomingMsg.includes('hola')) {
    response = 'Hola 👋 Soy tu asistente. ¿En qué puedo ayudarte?';
  } else {
    response = 'Recibí tu mensaje: ' + (req.body.Body || '');
  }

  res.set('Content-Type', 'text/xml');
  res.send(`
    <Response>
      <Message>${response}</Message>
    </Response>
  `);
});

app.get('/', (req, res) => {
  res.send('Servidor activo 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto ' + PORT);
});
