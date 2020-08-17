import display from './display';

const loadMenu = (() => {
  const appDisplay = display();
  const welcomeMessage = appDisplay.createMenuCards('MENUWelcome to sopranos! Have fun and eat well!!!');
  return welcomeMessage;
})();

export default loadMenu;