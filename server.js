const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB(); //connect to database

app.get('/', (req, res) => res.send('API Running'));
app.get('/andrew', (req, res) => res.send('Andrew here...'));

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server started on port ${port}`));
