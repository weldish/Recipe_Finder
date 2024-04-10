import React from 'react';

// this componenet recievies a list of recipes and dispalys them

function RecipeList({ recipes, setSelectedRecipe }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-item" onClick={() => setSelectedRecipe(recipe)}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} style={{ width: '100px' }} />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
