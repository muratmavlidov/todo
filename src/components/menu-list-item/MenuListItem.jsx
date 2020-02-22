import React from 'react';
import { Badge } from '../';

import './index.scss';

const MenuListItem = ({ icon, name, color, active, isRemovable }) => {

  const activeClass = active ? 'active' : '';

  return (
    <li className={`todo__list-item ${activeClass}`}>

      {icon && (<i><img src={ icon } alt="menu"/></i>)}

      <div className="todo__list-itemBadge">
        {!icon && (
          <Badge color={color} />
        )}
      </div>

      <span>{ name }</span>
    </li>
  );
}

export default MenuListItem;