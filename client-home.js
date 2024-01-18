const title = document.getElementById('title');
title.classList.add('animate');

setTimeout(() => {
    title.style.top = '35vh';
    title.style.opacity = '100%';
}, 100);

document.addEventListener('click', () => {
    socket.emit('userPage');
});

socket.on('userPage', () => {
    window.location.href = ('/user');
})
