import React, { useState } from 'react';
import { Badge } from '..';

import './index.scss';

const AddCategory = ({ colors }) => {
  const [visibleAddPopup, setVisibleAddPopup] = useState(false); 
  const [selectedColor, selectColor] = useState(colors[0].id);

  

  return(
    <div className="todo__sidebarAdded">

      <div className="todo__sidebarAddedBtn" onClick={() => setVisibleAddPopup(!visibleAddPopup)}>
        <span className={`add-icon ${visibleAddPopup && 'active'}`}></span>
        <span>Добавить категорию</span>
      </div>
      
      {visibleAddPopup && 
        <div className="addedPopup">
          <input type="text" className="field" placeholder="Название категории"/>

          <ul className="addedPopup__colors">
            { 
             colors.map(({hex, id}) => (
              <li key={id}>
                <Badge
                  onClick={() => selectColor(id)} 
                  clazz={selectedColor === id ? 'active' : ''}
                  hex={hex} 
                />
              </li>
             )) 
            }
          </ul>

          <button className="button">Добавить</button>
        </div>
      }
    </div>
  )
}

export default AddCategory;