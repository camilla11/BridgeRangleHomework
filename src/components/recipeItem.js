import React from 'react';

export default function RecipeItem({
  title,
  url,
  ingredients,
}) {
  return (
    <div>
    <div style={{color: 'blue', fontSize: 20}}> {title} </div>
    <a href = {url}> Link </a>
    <div> Requires:
      <div style={{fontSize: 10}}> {ingredients} </div>
    </div>
    </div>
  );
}
