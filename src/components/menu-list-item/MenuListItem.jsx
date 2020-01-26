import React from 'react';

import './index.scss';

const MenuListItem = ({ icon, name, color, active }) => {

  const activeClass = active ? 'active' : '';

  return (
    <li className={`todo__list-item ${activeClass}`}>

      {icon && (<i><img src={ icon } alt="menu"/></i>)}

      {!icon && (
        <span className={`badge badge--${color}`}></span>
      )}

      <span>{ name }</span>
    </li>
  );
}

export default MenuListItem;