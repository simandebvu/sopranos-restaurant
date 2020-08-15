
const menu = () => {
  const div = document.createElement('div');
  div.className = 'tab';
  let menuName = '';
  const div_content = document.createElement('div');
  div_content.className = 'tab-content';

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'css-tabs';
  input.id = `tab-${i + 1}`;
  switch (i) {
    case 0:
      input.setAttribute('checked', 'checked');
      menuName = 'Home';
      break;
    case 1:
      menuName = 'Menu';
      break;
    case 2:
      menuName = 'Contacts';
      contactDetails(div_content);
      break;
    default:
              // code block
  }
  input.classList.add('tab-switch');

  const label = document.createElement('label');
  label.htmlFor = `tab-${i + 1}`;
  label.classList.add('tab-label');
  label.innerHTML = menuName;

  div_content.classList.add('w-100');


  div.appendChild(input);
  div.appendChild(label);
  div.appendChild(div_content);

  tabs.appendChild(div);
};