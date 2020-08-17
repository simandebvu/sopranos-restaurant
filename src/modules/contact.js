import display from './display';

const loadContact = (() => {
  const appDisplay = display();
  const welcomeMessage = appDisplay.createWelcomeMessage('CONTACTWelcome to sopranos! Have fun and eat well!!!');
  return welcomeMessage;
})();

export default loadContact;