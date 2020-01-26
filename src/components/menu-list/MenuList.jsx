import React from 'react';
import MenuListItem from '../menu-list-item';


import './index.scss';

const MenuList = ({ items }) => {
  return (
    <ul className="menu__list">
      {
        items.map((props) => {
          return (
            <MenuListItem {...props} />
          )
        })
      }
    </ul>
  );
}

export default MenuList;