import { findByID, getFromLocalStorage, setInLocalStorage } from '../utils.js';
import scenarios from '../data/data.js';

let goldDiv = document.getElementById('gold-val');
let repDiv = document.getElementById('rep-val');
const nameDiv = document.getElementById('user-name');
const avatarDiv = document.getElementById('avatar');

let user = getFromLocalStorage('user');

goldDiv.textContent = user.gold;
repDiv.textContent = user.rep;
nameDiv.textContent = user.name;
avatarDiv.src = user.avatarURL;

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
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
const rowDiv0 = document.createElement('label');
rowDiv0.classList.add('flex-row');
const rowDiv1 = document.createElement('label');
rowDiv1.classList.add('flex-row');
const rowDiv2 = document.createElement('label');
rowDiv2.classList.add('flex-row');
const inputDiv0 = document.createElement('input');
inputDiv0.type = 'radio';
inputDiv0.name = 'options';
inputDiv0.checked = true;
inputDiv0.id = scenarios[i].choices[0].id;
const inputDiv1 = document.createElement('input');
inputDiv1.type = 'radio';
inputDiv1.name = 'options';
inputDiv1.id = scenarios[i].choices[1].id;
const inputDiv2 = document.createElement('input');
inputDiv2.type = 'radio';
inputDiv2.name = 'options';
inputDiv2.id = scenarios[i].choices[2].id;

const opt0 = document.createElement('label');
opt0.textContent = scenarios[i].choices[0].description;
const opt1 = document.createElement('label');
opt1.textContent = scenarios[i].choices[1].description;
const opt2 = document.createElement('label');
opt2.textContent = scenarios[i].choices[2].description;

const optionButtonDiv = document.createElement('button');
optionButtonDiv.textContent = 'Do it!';
optionButtonDiv.id = 'option-button';

const continueButtonDiv = document.createElement('button');
continueButtonDiv.textContent = 'Continue!';
continueButtonDiv.id = 'continue-button';
continueButtonDiv.style.display = 'none';

mainDiv.appendChild(labelDiv);
mainDiv.appendChild(imgDiv);
mainDiv.appendChild(pDiv);
mainDiv.appendChild(columnDiv);
columnDiv.appendChild(rowDiv0);
rowDiv0.appendChild(inputDiv0);
rowDiv0.appendChild(opt0);
columnDiv.appendChild(rowDiv1);
rowDiv1.appendChild(inputDiv1);
rowDiv1.appendChild(opt1);
columnDiv.appendChild(rowDiv2);
rowDiv2.appendChild(inputDiv2);
rowDiv2.appendChild(opt2);
mainDiv.appendChild(optionButtonDiv);
mainDiv.appendChild(continueButtonDiv);




optionButtonDiv.addEventListener('click', () => {
    const checkedRadioButton = document.querySelector('input[type=radio]:checked');
    const id = checkedRadioButton.id;
    const outcomeChoice = findByID(scenarios[i].choices, id);
    pDiv.textContent = outcomeChoice.outcome;
    const div = document.getElementsByClassName('flex-column')[1];
    div.style.display = 'none';

    continueButtonDiv.style.display = 'block';
    optionButtonDiv.style.display = 'none';

    user = getFromLocalStorage('user');

    let currentGold = outcomeChoice.gold + user.gold;
    let currentRep = outcomeChoice.rep + user.rep;

    goldDiv.textContent = currentGold;
    repDiv.textContent = currentRep;

    user.gold = currentGold;
    user.rep = currentRep;
    user.visited.push(scenarios[i].id);

    setInLocalStorage('user', user);

});


continueButtonDiv.addEventListener('click', () => {
    if (user.visited.length === 4){
        window.location.replace('../result/result.html');
    } else {
        window.location.replace('../map/map.html');
    }

});







