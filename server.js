const express = require('express');
const mongooose = require('mongoose');

const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');

const app = express();

const db = require('./config/keys').mongoURI;

mongooose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (_, res) => res.send('Hello World'));
app.use('/api/posts', posts);
app.use('/api/profile', profile);
app.use('/api/users', users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
