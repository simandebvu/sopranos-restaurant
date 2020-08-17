import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';
import navigation from './modules/navigation';
import contactDetails from './modules/contact';
import menuI from './modules/menu';
import homeDetails from './modules/home';

const renderMenu = (() => {
  const container = document.querySelector('#content');
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');
  const menuItems = [{
    index: 0, title: 'Home', isPrimary: true, parent: tabs, pageContent: homeDetails,
  }, {
    index: 1, title: 'Menu', isPrimary: false, parent: tabs, pageContent: menuI,
  }, {
    index: 2, title: 'Contact', isPrimary: false, parent: tabs, pageContent: contactDetails,
  }];
  const mainMenu = navigation();
  mainMenu.createMenuTabs(menuItems);
  wrapper.appendChild(tabs);
  container.appendChild(wrapper);
})();