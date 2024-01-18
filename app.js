const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

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
    res.sendFile(join(__dirname, 'listenerHub.html'))
})

io.on('connection', (socket) => {
    console.log('welcome to enhaflix 🕶️🍿');

    socket.on('userPage', () => {
        socket.emit('userPage');
    })

    socket.on('engeneHub', () => {
        socket.emit('engeneHub');
    })

    socket.on('listenerHub', () => {
        socket.emit('listenerHub');
    })

});

server.listen(1130, () => {
    console.log('server running at port 1130');
});