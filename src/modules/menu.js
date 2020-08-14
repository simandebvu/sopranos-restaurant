const insertNavBar = (menuItemsList) => {
    const ul = document.createElement('ul');
    ul.className = 'nav';
    menuItemsList.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
    });
}