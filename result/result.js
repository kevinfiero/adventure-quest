import { getFromLocalStorage } from '../utils.js';

let goldDiv = document.getElementById('gold-val');
let repDiv = document.getElementById('rep-val');
const nameDiv = document.getElementById('user-name');
const avatarDiv = document.getElementById('avatar');

let user = getFromLocalStorage('user');

goldDiv.textContent = user.gold;
repDiv.textContent = user.rep;
nameDiv.textContent = user.name;
avatarDiv.src = user.avatarURL;

const restartButtonDiv = document.getElementById('restart-button');

restartButtonDiv.addEventListener('click', () => {
    window.location.replace('../index.html');
});