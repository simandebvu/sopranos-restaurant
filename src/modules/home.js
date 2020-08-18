import display from './display';

const loadHome = (() => {
  const appDisplay = display();
  const funnyQuotes = [{ firstLine: 'Things worth having are worth waiting for.', secondLine: 'Me, preheating the oven.' }, { firstLine: 'Ive forgotten a lot of things in life.', secondLine: 'A meal has never been one of them.' }, { firstLine: 'Relationship status:', secondLine: 'chocolate.' }, { firstLine: 'The best things in life are', secondLine: 'cheese.' }, { firstLine: 'All you need is', secondLine: 'lunch.' }];

  const random = Math.floor(Math.random() * funnyQuotes.length);
  const selectedQuote = funnyQuotes[random];
  const welcomeMessage = appDisplay.createWelcomeMessage('Welcome to sopranos! Have fun and eat well!!!\n This has been a dream to, in a small way- honour what was the best restaurant in Zimbabwe. \n So feel very welcome to browse though this awesome meal list and choose the dish that calls your taste buds the most!', selectedQuote.firstLine, selectedQuote.secondLine);
  return welcomeMessage;
})();

export default loadHome;