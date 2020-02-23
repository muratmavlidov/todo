import React, { useState } from 'react';
import { 
  MenuList, 
  AddCategory 
} from './components';

import menuSvg from './assets/img/menu.svg';
import DB from './assets/db.json';

function App() {

  const [lists, setLists] = useState(
    DB.lists.map(item => {
      item.color = DB.colors.find(({id}) => id === item.colorId).name
      return item
    })
  );

  const onAddListItem = (newListItem) => {
    if (!newListItem.name) return;
    const newList = [...lists, newListItem];
    setLists(newList);
  }

  return (
    <div className="todo">

      <aside className="todo__sidebar">
        <div className="todo__sidebar-title">
          <MenuList 
            items={[
              { icon: menuSvg, name: 'Все задачи', active: true }
            ]}
          />
        </div>
        
        <MenuList items={lists} isRemovable />
        <AddCategory colors={DB.colors} onAddListItem={onAddListItem} />
      </aside>

      <div className="todo__tasks">
        
      </div>

    </div>
  );
}

export default App;
