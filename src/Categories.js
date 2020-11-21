import React from 'react';

const Categories = ({ filter }) => {
  const categories = ["all", "breakfast", "lunch", "shakes"];
  return (
    <nav className="btn-container">
      {categories
        .map((category, index) => {
          return (
            <button className="filter-btn" key={index} onClick={() => filter(category)}>
              {category}
            </button>
          );
        })
      }
    </nav>
  );
};

export default Categories;
