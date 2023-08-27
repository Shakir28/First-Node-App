const express = require('express');
const app = express();
const data = require('./data.json');
console.log(`data :: ${JSON.stringify(data)}`)
app.get('/', (req, res) => {
    res.send(JSON.stringify(data))
});

app.listen(5000, () => console.log('App is running in port 5000'))