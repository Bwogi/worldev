const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('API Running'));
app.get('/andrew', (req, res) => res.send('Andrew here...'));

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server started on port ${port}`));
