const express = require('express');

require('dotenv').config({
    path: __dirname + '/./../.env'
});

const app = express();
const port = process.env.SERVER_PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.status(200)
    .json({
        message: 'API working...'
    });
});

app.listen(port, () => {
    console.log('Server running: http://localhost:' + port);
});
