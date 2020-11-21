import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenu(items);
    } else {
      setMenu(items.filter(item => item.category === category))
    }
  }

  return (
    <main className="menu">
      <header className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </header>
      <Categories filter={filterMenu}/>
      <Menu list={menu}/>
    </main>
  );
}

export default App;
