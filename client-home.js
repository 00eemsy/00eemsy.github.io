const title = document.getElementById('title');
title.classList.add('animate');

setTimeout(() => {
    title.style.top = '35vh';
    title.style.opacity = '100%';
}, 100);

document.addEventListener('click', () => {
    window.location.href = ('/enhaflix/user');
});
