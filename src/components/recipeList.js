import React from 'react';
import RecipeItem from './recipeItem'

export default function RecipeList({
  recipes,
  filter,
}){
  return (
    <div>
    {recipes.filter(
      (recipe) => recipe.title.includes(filter) ||
      filter==""
    ).map((recipe,index) => <RecipeItem key={index}
      title={recipe.title} url={recipe.href}
       ingredients = {recipe.ingredients} />)}
    </div>
  )
}
