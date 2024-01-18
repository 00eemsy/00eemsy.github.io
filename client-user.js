const engene = document.getElementById('engene');
const listener = document.getElementById('listener');

engene.addEventListener('click', () => {
    window.location.href = ('/enhaflix/engeneHub');
});

listener.addEventListener('click', () => {
    window.location.href = ('/enhaflix/listenerHub');
})
