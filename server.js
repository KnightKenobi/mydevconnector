const express = require('express');
const mongooose = require('mongoose');

const app = express();

const db = require('./config/keys').mongoURI;

mongooose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (_, res) => res.send('Hello World'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

