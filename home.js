// import functions and grab DOM elements

import { setInLocalStorage } from "./utils.js";

// initialize state

// set event listeners to update state and DOM

const startButton = document.getElementById('start-button');
const nameForm = document.getElementById('name-form');

startButton.addEventListener('click', () => {

    const user = {
        name: '',
        rep: 50,
        gold: 50,
        visited: []

    };

    user.name = nameForm.value;
    console.log(user.name);

    setInLocalStorage('user', user);



});