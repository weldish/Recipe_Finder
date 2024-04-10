import React from 'react';

function RecipeDetails({ recipe, addToShoppingList }) {
  return (
    <div className="recipe-details">
      <h2 className="recipe-title"> {recipe.title} </h2>
      <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      <h3 className="ingredients-header">Ingredients</h3>
      <ul className="ingredients-list">
        {recipe.usedIngredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.original}
            <img src={ingredient.image} alt={ingredient.name}  />
          </li>
        ))}
        {recipe.missedIngredients.map((ingredient) => (
          <li key={ingredient.id} >
            {ingredient.original}
            <img src={ingredient.image} alt={ingredient.name}  />
          </li>
        ))}
      </ul>
      <p><strong>Note:</strong> This recipe includes ingredients you have and some that you might miss.</p>
      <button onClick={() => addToShoppingList(recipe)}>Add Ingredients to Shopping List</button>
    </div>
  );
}

export default RecipeDetails;
