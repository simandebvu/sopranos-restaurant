import display from './display';

const loadContact = (() => {
  const appDisplay = display();
  const contactMessage = appDisplay.createContactMessage('shingim1@gmail.com', 'Shingirayi Mandebvu');
  return contactMessage;
})();

export default loadContact;