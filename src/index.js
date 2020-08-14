import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss';

const renderMenu = (() => {
    const container = document.querySelector('#content');
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');

    for(let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.className = "tab";
        let div_content = document.createElement('div');
        div_content.className = "tab-content";

        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'css-tabs';
        input.id = `tab-${i+1}`;
        if (i == 0){
            input.setAttribute('checked', 'checked')
        }
        input.classList.add("tab-switch");

        let label = document.createElement('label');
        label.htmlFor = `tab-${i+1}`;
        label.classList.add("tab-label");
        label.innerHTML = 'Inner';

        div_content.classList.add('w-100');
        div_content.innerHTML = `My father now and then sending me small sums of money ${i+1}`;


        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(div_content);

        tabs.appendChild(div);
    }
    
    wrapper.appendChild(tabs);
    container.appendChild(wrapper);
})();

