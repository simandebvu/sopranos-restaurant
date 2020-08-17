const display = () => {
  const mainMenu = () => {
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const container = document.querySelector('#content');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const createMenuItem = (item) => {
      const tabsTab = document.createElement('div');
      tabsTab.className = 'tab';
      const inputRadio = document.createElement('input');
      inputRadio.type = 'radio';
      inputRadio.name = 'css-tabs';
      inputRadio.id = `tab-${item.index + 1}`;
      if (item.isPrimary) {
        inputRadio.setAttribute('checked', 'checked');
      }
      inputRadio.classList.add('tab-switch');

      const tabLabel = document.createElement('label');
      tabLabel.htmlFor = `tab-${item.index + 1}`;
      tabLabel.classList.add('tab-label');
      tabLabel.innerHTML = item.title;

      const divContent = document.createElement('div');
      divContent.className = 'tab-content';
      divContent.classList.add('w-100');
      divContent.appendChild(item.pageContent);

      tabsTab.appendChild(inputRadio);
      tabsTab.appendChild(tabLabel);
      tabs.appendChild(tabsTab);
      tabsTab.appendChild(divContent);

      return { tabsTab };
    };

    wrapper.appendChild(tabs);
    container.appendChild(wrapper);
    return { createMenuItem };
  };


  const createWelcomeMessage = (t) => {
    // TODO random funny quotes
    const blockQuote = document.createElement('blockquote');
    blockQuote.classList.add('blockquote');
    const blockParagraph = document.createElement('p');
    blockParagraph.classList.add('mb-0', 'text-center');
    blockParagraph.innerHTML = 'Things worth having are worth waiting for.';
    const blockFooter = document.createElement('footer');
    blockFooter.classList.add('blockquote-footer');
    blockFooter.innerHTML = 'Me, preheating the oven.';
    blockQuote.appendChild(blockParagraph);
    blockQuote.appendChild(blockFooter);
    const element = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.innerText = t;
    element.appendChild(blockQuote);
    element.appendChild(paragraph);

    return element;
  };

  const createMenuCards = (t) => {
    const element = document.createElement('div');
    element.classList.add('card', 'col-md-4');
    const menuImage = document.createElement('img');
    menuImage.setAttribute('src', 'assets/breakfast.jpg');
    menuImage.setAttribute('alt', 'a truly tempting meal');
    element.appendChild(menuImage);
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.innerHTML = 'My title';
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    const cardLink = document.createElement('a');
    cardLink.setAttribute('href', 'https://simandebvu.github.io');
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.innerHTML = 'I want to eat this!';

    const paragraph = document.createElement('p');
    paragraph.innerText = t;
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    element.appendChild(menuImage);
    element.appendChild(cardBody);
    element.appendChild(paragraph);

    return element;
  };

  return {
    mainMenu, createWelcomeMessage, createMenuCards,
  };
};
export default display;