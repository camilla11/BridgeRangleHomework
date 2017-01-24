import React from 'react';
import RecipeItem from './recipeItem'

export default function RecipeList({
  recipes,
}){
  return (
    <div>
    {recipes.map((recipe,index) => <RecipeItem key={index}
      title={recipe.title} url={recipe.href}
       ingredients = {recipe.ingredients} />) }
    </div>
  )
}
