// import functions and grab DOM elements
localStorage.clear();
import { setInLocalStorage } from "./utils.js";

// initialize state

// set event listeners to update state and DOM

const startButton = document.getElementById('start-button');
const nameForm = document.getElementById('name-form');



startButton.addEventListener('click', () => {

    const user = {
        name: '',
        avatar: '',
        avatarURL: '',
        rep: 50,
        gold: 50,
        visited: []
    };

    const checkedRadioButton = document.querySelector(':checked');

    let avatar = checkedRadioButton.value;
    let avatarURL = `../assets/${avatar}.svg`;

    user.name = nameForm.value;
    user.avatar = avatar;
    user.avatarURL = avatarURL;


    setInLocalStorage('user', user);

    window.location.replace('./map/map.html');

});