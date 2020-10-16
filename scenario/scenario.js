import { getFromLocalStorage } from '../utils.js';
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

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
console.log(id);
let i;
if (id === 'cave'){
    i = 0;
} else if (id === 'wall') {
    i = 1;
} else if (id === 'pier') {
    i = 2;
} else if (id === 'castle') {
    i = 3;
}


const mainDiv = document.getElementsByTagName('main')[0];

const labelDiv = document.createElement('label');
labelDiv.id = 'header';
labelDiv.textContent = scenarios[i].title;

const imgDiv = document.createElement('img');
imgDiv.src = scenarios[i].image;

const pDiv = document.createElement('p');
pDiv.textContent = scenarios[i].description;

const columnDiv = document.createElement('div');
columnDiv.classList.add('flex-column');
const rowDivi = document.createElement('div');
rowDivi.classList.add('flex-row');
const rowDiv1 = document.createElement('div');
rowDiv1.classList.add('flex-row');
const rowDiv3 = document.createElement('div');
rowDiv3.classList.add('flex-row');
const inputDiv1 = document.createElement('input');
inputDiv1.type = 'radio';
inputDiv1.name = 'options';
const inputDiv2 = document.createElement('input');
inputDiv2.type = 'radio';
inputDiv2.name = 'options';
const rowDiv2 = document.createElement('input');
rowDiv2.type = 'radio';
rowDiv2.name = 'options';

const opti = document.createElement('label');
opti.textContent = scenarios[i].choices[0].description;
const opt1 = document.createElement('label');
opt1.textContent = scenarios[i].choices[1].description;
const opt2 = document.createElement('label');
opt2.textContent = scenarios[i].choices[2].description;

const optionButtonDiv = document.createElement('button');
optionButtonDiv.textContent = 'Do it!';
optionButtonDiv.id = 'option-button';

mainDiv.appendChild(labelDiv);
mainDiv.appendChild(imgDiv);
mainDiv.appendChild(pDiv);
mainDiv.appendChild(columnDiv);
columnDiv.appendChild(rowDivi);
rowDivi.appendChild(inputDiv1);
rowDivi.appendChild(opti);
columnDiv.appendChild(rowDiv1);
rowDiv1.appendChild(inputDiv2);
rowDiv1.appendChild(opt1);
columnDiv.appendChild(rowDiv3);
rowDiv3.appendChild(rowDiv2);
rowDiv3.appendChild(opt2);
mainDiv.appendChild(optionButtonDiv);









