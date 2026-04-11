const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

// Esta es la línea crucial que faltaba para entender los datos de Twilio
app.use(express.urlencoded({ extended: true }));

app.post('/webhook', (req, res) => {
  console.log('Mensaje recibido:', req.body);

  const twiml = new MessagingResponse();
  twiml.message('👋 BOT ACTIVO - respuesta correcta');

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.get('/', (_req, res) => {
  res.send('Servidor activo');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
