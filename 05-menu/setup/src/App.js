import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(
  items.map((item) =>
    item.category
  ))]


function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
        </div>
        <div className='underline'>

        </div>
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
