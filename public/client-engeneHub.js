var socket = io()

const sweetVenom = document.getElementById('sweet-venom');
const iland = document.getElementById('iland');
const enoclock = document.getElementById('enoclock');
const gameCaterers = document.getElementById('game-caterers');
const sosofun = document.getElementById('sosofun');

sweetVenom.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=qedonJosQ3g&ab_channel=HYBELABELS';
});

iland.addEventListener('click', () => {
    window.location.href = 'https://dramacool.com.pa/i-land-episode-1.html';
});

enoclock.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/playlist?list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO';
});

gameCaterers.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/playlist?list=PLr0T5CaHaPwUBW8ecEgu_09ZsVzaBBMCf';
});

sosofun.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/playlist?list=PLMQ4WMltba-GrMZTqRZinxleeALwB6-YV';
});