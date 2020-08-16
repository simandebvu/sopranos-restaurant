const menu = () => {
  const createMenuItem = (i, menuName, isPrimary, tabs, contactDetails) => {
    const div = document.createElement('div');
    div.className = 'tab';
    const divContent = document.createElement('div');
    divContent.className = 'tab-content';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'css-tabs';
    input.id = `tab-${i + 1}`;
    if (isPrimary) {
      input.setAttribute('checked', 'checked');
    }
    contactDetails(divContent);
    // .log(typeof contactDetails);
    input.classList.add('tab-switch');

    const label = document.createElement('label');
    label.htmlFor = `tab-${i + 1}`;
    label.classList.add('tab-label');
    label.innerHTML = menuName;

    divContent.classList.add('w-100');

    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(divContent);
    tabs.appendChild(div);
  };

  return { createMenuItem };
};
export default menu;