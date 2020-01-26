import React from 'react';
import MenuList from './components/menu-list';

import menuSvg from './assets/img/menu.svg';

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
        />
      </aside>

      <div className="todo__tasks">
        
      </div>

    </div>
  );
}

export default App;
