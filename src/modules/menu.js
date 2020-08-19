import display from './display';

const loadMenu = (() => {
  const appDisplay = display();
  const menuItems = [{
    title: 'Breakfast Deluxe', description: 'A full american breakfast.', price: '$25.00', imagePath: 'assets/breakfast.jpg',
  }, {
    title: 'Chicken Madness', description: 'An ultimate meal filler.', price: '$15.00', imagePath: 'assets/chicken.jpg',
  }, {
    title: 'Sweet Sensation', description: 'A full sweet tooth heaven.', price: '$18.00', imagePath: 'assets/nice.jpg',
  }];
  const menuDisplay = appDisplay.createMenuCard(menuItems);
  return menuDisplay;
})();

export default loadMenu;