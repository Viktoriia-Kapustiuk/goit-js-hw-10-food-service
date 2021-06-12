import './sass/main.scss';
import menu from "./menu.json";
import onGenerateMarkup from "./templates/meal-card.hbs";

const listMenu = document.querySelector('.js-menu');
listMenu.insertAdjacentHTML('beforeend', onGenerateMarkup(menu));

const toggle = document.querySelector('#theme-switch-toggle');
toggle.addEventListener('change', (e) => {
    e.preventDefault();
    if (localStorage.getItem('theme') === 'dark-theme') {
        localStorage.setItem('theme', 'light-theme');
    } else {
        localStorage.setItem('theme', 'dark-theme');
    }
    createDarkMode();
});

function createDarkMode() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        const body = document.querySelector('body');
        body.classList.add('dark-theme');
        toggle.setAttribute('checked', true);
    } else {
        document.querySelector('body').classList.remove('dark-theme');

    }
}
createDarkMode();