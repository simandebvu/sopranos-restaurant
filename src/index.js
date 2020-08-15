import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';
import contactDetails from './modules/contact';

const renderMenu = (() => {
    const container = document.querySelector('#content');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');

    const createMenuTabs = (i)=> {
        let div = document.createElement('div');
        div.className = "tab";
        let menuName = '';
        let div_content = document.createElement('div');
        div_content.className = "tab-content";

        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'css-tabs';
        input.id = `tab-${i+1}`;
        switch(i) {
            case 0:
                input.setAttribute('checked', 'checked');
                menuName = "Home";
                break;
                case 1:
                    menuName = "Menu";
                    break;
                    case 2:
                        menuName = "Contacts";
                        contactDetails(div_content);
                break;
            default:
              // code block
        }
        input.classList.add("tab-switch");

        let label = document.createElement('label');
        label.htmlFor = `tab-${i+1}`;
        label.classList.add("tab-label");
        label.innerHTML = menuName;

        div_content.classList.add('w-100');
       


        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(div_content);

        tabs.appendChild(div);
    }

    for(let i = 0; i < 3; i++) {
        createMenuTabs(i);
    }
    
    wrapper.appendChild(tabs);
    container.appendChild(wrapper);
})()


