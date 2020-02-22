import React from 'react';

import './index.scss';

const Badge = ({ color, hex, clazz, onClick }) => {

  const styles = {
    backgroundColor: hex || ''
  }

  return(
    <span onClick={onClick} 
          style={styles} 
          className={`badge badge--${color} ${clazz}`}>
    </span>
  );
}

export default Badge;