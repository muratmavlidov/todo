import React from 'react';
import {MenuListItem} from '../';


import './index.scss';

const MenuList = ({ items, isRemovable }) => {
  return (
    <ul className="menu__list">
      {
        items.map((props, index) => {
          return (
            <MenuListItem {...props} isRemovable={isRemovable} key={index} />
          )
        })
      }
    </ul>
  );
}

export default MenuList;