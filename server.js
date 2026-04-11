const express = require('express');
const app = express();

// MUY IMPORTANTE para Twilio
app.use(express.urlencoded({ extended: true }));

app.post('/webhook', (req, res) => {
    console.log('Mensaje recibido:', req.body);

    const incomingMsg = (req.body.Body || '').trim().toLowerCase();

    let response = '';

    if (incomingMsg.includes('hola')) {
        response = 'Hola 👋 Soy tu asistente. ¿En qué puedo ayudarte?';
    } else {
        response = 'Recibí tu mensaje: ' + incomingMsg;
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

// 🔥 Render usa su propio puerto
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto', PORT);
});
