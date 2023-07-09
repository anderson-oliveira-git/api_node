const express = require('express');
const pessoaRoutes = require('../api/routes/pessoa');

require('dotenv').config({
  path: __dirname + '/./../.env'
});

// Server configs .:.
const app  = express();
const port = process.env.SERVER_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes .:.
app.use('/api/v1', pessoaRoutes);

app.listen(port, () => {
  console.log('Server running: http://localhost:' + port);
});
