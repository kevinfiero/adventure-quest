import { getFromLocalStorage } from '../utils.js';

const goldDiv = document.getElementById('gold-val');
const repDiv = document.getElementById('rep-val');
const nameDiv = document.getElementById('user-name');
const avatarDiv = document.getElementById('avatar');

const user = getFromLocalStorage('user');

goldDiv.textContent = user.gold;
repDiv.textContent = user.rep;
nameDiv.textContent = user.name;
avatarDiv.src = user.avatarURL;

for (let i = 0; user.visited.length; i++){
    let id = `${user.visited[i]}-link`;
    let element = document.getElementById(id);
    element.style.display = 'none';
}

