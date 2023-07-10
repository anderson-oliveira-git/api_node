const express = require('express');
const pessoaRoutes = require('../api/routes/pessoa');
const nivelRoutes  = require('../api/routes/nivel');
const turmaRoutes  = require('../api/routes/turma');

require('dotenv').config({
  path: __dirname + '/./../.env'
});

// Server configs .:.
const app  = express();
const port = process.env.SERVER_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes .:.
const baseUrl = '/api/v1';
app.use(baseUrl, pessoaRoutes);
app.use(baseUrl, nivelRoutes);
app.use(baseUrl, turmaRoutes);

app.listen(port, () => {
  console.log('Server running: http://localhost:' + port);
});
