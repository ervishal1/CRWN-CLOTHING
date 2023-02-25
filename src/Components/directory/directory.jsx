import React from 'react'
import CategoryItem from '../category-Item/CategoryItem';

import './directory.style.scss';

const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => {
        return <CategoryItem title={title} imageUrl={imageUrl} key={id} />;
      })}
    </div>
  )
}

export default Directory