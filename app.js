const express = require('express');
const { join } = require('path');

const app = express();

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'home.html'));
});

app.get('/user', (req, res) => {
    res.sendFile(join(__dirname, 'user.html'));
});

app.get('/engene-hub', (req, res) => {
    res.sendFile(join(__dirname, 'engeneHub.html'));
});

app.get('/listener-hub', (req, res) => {
    res.sendFile(join(__dirname, 'listenerHub.html'));
});

app.listen(1130, () => {
    console.log('server running at port 1130');
});
