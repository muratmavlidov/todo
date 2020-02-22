import React from 'react';
import { 
  MenuList, 
  AddCategory 
} from './components';

import menuSvg from './assets/img/menu.svg';

import DB from './assets/db.json';

function App() {
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
        <MenuList 
          items={[
            { color: 'green', name: 'Покупки' },
            { color: 'blue', name: 'Фронтенд' },
            { color: 'pink', name: 'Фильмы и сериалы' }
          ]}
          isRemovable
        />

        <AddCategory colors={DB.colors} />
      </aside>

      <div className="todo__tasks">
        
      </div>

    </div>
  );
}

export default App;
