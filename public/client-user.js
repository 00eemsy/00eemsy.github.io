var socket = io();

const engene = document.getElementById('engene');
const listener = document.getElementById('listener');

engene.addEventListener('click', () => {
    socket.emit('engeneHub');
});

listener.addEventListener('click', () => {
    socket.emit('listenerHub');
})

socket.on('engeneHub', () => {
    window.location.href = ('/engene-hub');
});

socket.on('listenerHub', () => {
    window.location.href = ('listener-hub');
});