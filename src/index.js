import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';
import contactDetails from './modules/contact';

import menu from './modules/navigation';
import menuI from './modules/menu';
import homeDetails from './modules/home';


const renderMenu = (() => {
  const container = document.querySelector('#content');
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');
  const mainMenu = menu();
  mainMenu.createMenuItem(0, 'Home', true, tabs, homeDetails);
  mainMenu.createMenuItem(1, 'Menu', false, tabs, menuI);
  mainMenu.createMenuItem(2, 'Contact', false, tabs, contactDetails);


  wrapper.appendChild(tabs);
  container.appendChild(wrapper);
})();
