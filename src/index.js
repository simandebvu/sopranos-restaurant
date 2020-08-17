import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';
import display from './modules/display';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

const startApp = (() => {
  const appDisplay = display();
  const tabMenu = appDisplay.mainMenu();
  const pages = [];
  const menuItems = [{
    index: 0, title: 'Home', isPrimary: true, pageContent: loadHome,
  }, {
    index: 1, title: 'Menu', isPrimary: false, pageContent: loadMenu,
  }, {
    index: 2, title: 'Contact', isPrimary: false, pageContent: loadContact,
  }];


  menuItems.forEach(item => {
    tabMenu.createMenuItem(item);
    pages[item.title.toString] = item;
  });
})();