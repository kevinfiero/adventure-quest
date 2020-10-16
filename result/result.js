import { getFromLocalStorage } from '../utils.js';
import { gold, rep} from '../data/results.js';

let goldDiv = document.getElementById('gold-val');
let repDiv = document.getElementById('rep-val');
const nameDiv = document.getElementById('user-name');
const avatarDiv = document.getElementById('avatar');

let user = getFromLocalStorage('user');

goldDiv.textContent = user.gold;
repDiv.textContent = user.rep;
nameDiv.textContent = user.name;
avatarDiv.src = user.avatarURL;

const outcomeDiv = document.getElementById('outcome');

let outcomeString;

if (user.gold >= 220){
    outcomeString = gold[0].description;
} else if (user.gold < 220 && user.gold > 60){
    outcomeString = gold[1].description;
} else {
    outcomeString = gold[2].description;
}

if (user.rep >= 150){
    outcomeString = outcomeString + ' ' + rep[0].description;
} else if (user.rep < 150 && user.rep > 70){
    outcomeString = outcomeString + ' ' + rep[1].description;
} else {
    outcomeString = outcomeString + ' ' + rep[2].description;
}


outcomeDiv.textContent = outcomeString;



const restartButtonDiv = document.getElementById('restart-button');

restartButtonDiv.addEventListener('click', () => {
    window.location.replace('../index.html');
});

