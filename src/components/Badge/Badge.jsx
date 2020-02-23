import React from 'react';

import './index.scss';

const Badge = ({ color, clazz, onClick }) => {

  return(
    <span onClick={onClick} 
          className={`badge badge--${color} ${clazz}`}>
    </span>
  );
}

export default Badge;