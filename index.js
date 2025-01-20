const express = require('express');
const { uptime } = require('os');
const app = express();

const PORT = process.env.PORT || 3000;
app.get( '/', ( req, res ) => {
  res.send( 'Bem vindo ao meu primeiro projeto node.js!' )
});

app.get('/status', (req, res) => {
  res.json(
    {status :"API ta on", uptime: process.uptime()});
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
