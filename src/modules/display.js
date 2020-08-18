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


  const createWelcomeMessage = (t, blockQuoteText, blockCitationText) => {
    const blockQuote = document.createElement('blockquote');
    blockQuote.classList.add('blockquote');
    const blockParagraph = document.createElement('p');
    blockParagraph.classList.add('mb-0', 'text-center');
    blockParagraph.innerHTML = blockQuoteText;
    const blockFooter = document.createElement('footer');
    blockFooter.classList.add('blockquote-footer');
    blockFooter.innerHTML = blockCitationText;
    blockQuote.appendChild(blockParagraph);
    blockQuote.appendChild(blockFooter);
    const element = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.classList.add('lead');
    paragraph.innerText = t;
    element.appendChild(blockQuote);
    element.appendChild(paragraph);

    return element;
  };

  const createMenuCard = (foodItems) => {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('d-flex', 'flex-wrap', 'justify-content-between');
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#Description
    Object.entries(foodItems).forEach(entry => {
      const [key, value] = entry;
      const element = document.createElement('div');
      element.setAttribute('index', key);
      element.classList.add('card', 'col-md-3', 'mx-1');
      const menuImage = document.createElement('img');
      menuImage.classList.add('img-thumbnail');
      menuImage.setAttribute('src', value.imagePath);
      menuImage.setAttribute('alt', 'a truly tempting meal');
      element.appendChild(menuImage);
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      const cardTitle = document.createElement('h5');
      cardTitle.innerHTML = value.title;
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      const cardLink = document.createElement('a');
      cardLink.setAttribute('href', 'https://simandebvu.github.io');
      cardLink.classList.add('btn', 'btn-danger', 'font-weight-bold');
      cardLink.innerHTML = value.price;

      const paragraph = document.createElement('p');
      paragraph.innerText = value.description;
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardLink);
      element.appendChild(menuImage);
      element.appendChild(cardBody);
      element.appendChild(paragraph);
      cardsContainer.appendChild(element);
    });
    return cardsContainer;
  };

  return {
    mainMenu, createWelcomeMessage, createMenuCard,
  };
};
export default display;