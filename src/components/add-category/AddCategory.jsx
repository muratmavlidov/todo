import React, { useState, useEffect } from 'react';
import { Badge } from '..';

import './index.scss';
import DB from '../../assets/db.json';

const AddCategory = ({ colors, onAddListItem }) => {
  const [visibleAddPopup, setVisibleAddPopup] = useState(false); 
  const [selectedColor, selectColor] = useState(colors[0].id);
  const [fieldValue, setFieldValue] = useState();
  
  const newListItem = {
    "id": DB.lists.length + 1,
    "name": fieldValue, 
    "colorId": selectedColor,
    "color": DB.colors.find(({id}) => id === selectedColor).name
  };

  const onClose = () => {
    selectColor(colors[0].id);
    setVisibleAddPopup(false);
    setFieldValue('');
  }

  const onSubmitForm = () => {
    onAddListItem(newListItem);
    onClose();
  }

  return(
    <div className="todo__sidebarAdded">

      <div className={`todo__sidebarAddedBtn`} onClick={() => setVisibleAddPopup(!visibleAddPopup)}>
        <span className={`add-icon ${visibleAddPopup && 'active'}`}></span>
        <span>Добавить категорию</span>
      </div>
      
      {visibleAddPopup && 
        <div className={`addedPopup`}>
          <input  type="text" 
                  className="field" 
                  placeholder="Название категории"
                  onInput={({target: {value}}) => setFieldValue(value)}
          />

          <ul className="addedPopup__colors">
            { 
             colors.map(({name, id}) => (
              <li key={id}>
                <Badge
                  onClick={() => selectColor(id)} 
                  clazz={selectedColor === id ? 'active' : ''}
                  color={name} 
                />
              </li>
             )) 
            }
          </ul>

          <button className="button" onClick={onSubmitForm}>
            Добавить
          </button>
        </div>
      }
    </div>
  )
}

export default AddCategory;