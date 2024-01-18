const engene = document.getElementById('engene');
const listener = document.getElementById('listener');

engene.addEventListener('click', () => {
    window.location.href = ('/engene-hub');
});

listener.addEventListener('click', () => {
    window.location.href = ('/listener-hub');
})
