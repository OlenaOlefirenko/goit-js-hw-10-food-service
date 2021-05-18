import menu from '../menu.json';
import menuItems from '../templates/menu-items.hbs';

const galleryMenu = document.querySelector('.js-menu');
const markupMenu = menuItems(menu);
galleryMenu.insertAdjacentHTML('beforeend', markupMenu);
