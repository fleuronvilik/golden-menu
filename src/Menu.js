import React from 'react';

const Menu = ({ list }) => {
  return (
    <ul className="section-center">
      {list.map(item => {
        const {id, img, title, price, desc} = item;
        return (
          <li className="menu-item" key={id}>
            <img className="photo" src={img} alt={title}/>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </li>
        )
      })}
    </ul>
  );
};

export default Menu;
