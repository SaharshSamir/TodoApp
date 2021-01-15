const express = require('express');
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send({
        Hi: 'there'
    });
});

app.get('/route1', (req, res) => {
    res.send({
        Another: 'route'
    })
})