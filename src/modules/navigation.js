import createMenuItem from './display';

const navigation = () => {
  const createMenuTabs = (menuList) => {
    menuList.forEach(m => {
      createMenuItem(m.index, m.title, m.isPrimary, m.parent, m.pageContent);
    });
  };

  return { createMenuTabs };
};
export default navigation;