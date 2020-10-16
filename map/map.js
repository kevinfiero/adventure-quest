import { getFromLocalStorage, findByID } from '../utils.js';
import scenarios from '../data/data.js';

const goldDiv = document.getElementById('gold-val');
const repDiv = document.getElementById('rep-val');
const nameDiv = document.getElementById('user-name');
const avatarDiv = document.getElementById('avatar');

const user = getFromLocalStorage('user');

goldDiv.textContent = user.gold;
repDiv.textContent = user.rep;
nameDiv.textContent = user.name;
avatarDiv.src = user.avatarURL;
for (let i = 0; i < user.visited.length; i++){
    let id = `${user.visited[i]}-link`;
    let currentScenario = findByID(scenarios, user.visited[i]);
    let nextId = `${currentScenario.nextId}-link`;
    let element = document.getElementById(id);
    let nextElement = document.getElementById(nextId);
    element.style.display = 'none';
    nextElement.style.display = 'block';
}

