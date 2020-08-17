import display from './display';

const loadHome = (() => {
  const appDisplay = display();
  const welcomeMessage = appDisplay.createWelcomeMessage('Welcome to sopranos! Have fun and eat well!!!\n This has been a dream to, in a small way- honour what was the best restaurant in Zimbabwe. So feel very welcome to browse though this awesome meal list and choose the dish that calls your taste buds the most!');
  return welcomeMessage;
})();

export default loadHome;